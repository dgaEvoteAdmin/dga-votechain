import { searchUsers } from "~/src/services/fetch/user";
import { isBannedUser } from "~/src/services/validations/user";

export default defineEventHandler(async (event) => {
  const userData = event.context.userData;

  if(!userData || isBannedUser(userData)) {
    throw createError({
      statusCode: 403,
      statusMessage: "Forbidden",
    });
  }

  const query = getQuery(event);
  
  const userDocs = await searchUsers({
    userid: userData._id,
    keyword: typeof query.keyword === "string" ? query.keyword : "",
    adminOnly: query.adminOnly === "1",
    notSelf: query.notSelf === "1",
  }).limit(20);

  const users : UserSearchResponseData[] = userDocs.map((data) => {
    const role : UserRole = data.permissions.includes("dev-mode") ? "developer" : (data.permissions.includes("admin-mode") ? "admin" : "voter");
    
    return {
      _id: `${data._id}`,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      role,
    }
  });

  return users;
})