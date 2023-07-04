import { readFiles } from 'h3-formidable'
import fs from "fs/promises";
import { parse } from 'csv';
import { Readable } from "stream";

import { batchSearchActiveUserByKeywords, searchExactActiveUserByKeyword } from "~/src/services/fetch/user";
import { isAdminRole } from '~/src/services/validations/role';
import { isBannedUser } from "~/src/services/validations/user";

export default defineEventHandler(async (event) => {
  const userData = event.context.userData;

  if(!userData || isBannedUser(userData) || !isAdminRole(userData.roleMode)) {
    throw createError({
      statusCode: 403,
      statusMessage: "Forbidden",
    });
  }

  const { fields, files } = await readFiles(event, {
    includeFields: true
  })

  const file = files.csv[0];

  if(!file) {
    throw createError({
      statusMessage: "No CSV File",
      statusCode: 400,
    })
  }
  const query = getQuery(event);
  const adminOnly = query.adminOnly === "1";
  const excludeUserId = query.notSelf === "1" ? userData._id : undefined;
  
  const tempFile = await fs.readFile(file.filepath);
  const userSearchKeywords = await new Promise<string[]>((resolve, reject) => {
    const keywords : string[] = [];

    Readable.from(tempFile).pipe(parse({ delimiter: ",", from_line: 2 }))
      .on("data", (row) => {
        keywords.push(row[0] || "");
      })
      .on("finish", () => {
        resolve(keywords);   
      })
      .on("error", reject);
  });
  const searchUsers = await batchSearchActiveUserByKeywords(userSearchKeywords, { adminOnly, excludeUserId });
  
  const users = searchUsers.map((user) => {
    let role : UserRole | undefined;
    if(userData.roleMode === 'developer' && userData.permissions.includes("dev-mode")) {
      role = user.permissions.includes("dev-mode") ? "developer" :
        (user.permissions.includes("admin-mode") ? "admin" : "voter");
    }
    
    return {
      _id: `${user._id}`,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role,
    }
  })
  
  return users;
})