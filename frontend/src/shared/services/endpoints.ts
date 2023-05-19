const getRoleValue = (role: string) => {
  switch (role) {
    case 'ROLE_ADMIN':
      return 'admin'
    case 'ROLE_FARMER':
      return 'farmer'
    case 'ROLE_RETAILER':
      return 'retailer'
    case 'ROLE_SUPPPLIER':
      return 'supplier'
    default:
      return 'user'
  }
}

const getApiEndpoints = (userRole: string) => {
  const dynamicEndPoint = getRoleValue(userRole)

  return {
    // login: "/api/auth/signin",
    // devices
    getDevices: `/${dynamicEndPoint}/api/v1/device/getAllDevicesByCompany`,
  }
}

export default getApiEndpoints
