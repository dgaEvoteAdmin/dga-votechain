import UserModel from "~/src/models/user"
import { isDeveloperRole } from "~/src/services/validations/role";
import { isBannedUser } from "~/src/services/validations/user";

export default defineEventHandler(async (event) => {
  const userData = event.context.userData;

  if(!userData || isBannedUser(userData) || !isDeveloperRole(userData.roleMode)) {
    throw createError({
      statusCode: 403,
      statusMessage: "Forbidden",
    });
  }

  const userDocs = await UserModel.find({});

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