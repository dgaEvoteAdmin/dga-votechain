export const useSessionData = () => {
  return useState<{
    userid?: string,
    hasCitizenId?: Boolean,
    roleMode: UserRole,
    permissions: EVotePermission[],
    isGovOfficer?: boolean,
    preferences?: UserPreferences,
    firstName?: string,
    lastName?: string,
    email?: string,
    ministry?: string,
    department?: string,
    division?: string,
  }>('useSessionData', () => {
    return {
      roleMode: "guest",
      permissions: [],
      preferences: {
        topMenus: [],
      }
    }
  })
}