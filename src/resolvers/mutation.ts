export const Mutation = {
  login: async (_parent: any, { credentials }: any, { req, services }: any) => {
    const employee = await services.authentication.verifyCredentials(credentials)
    req.session.employee = employee
    return employee
  },
  logout: async (_parent: any, _args: any, { req }: any) => {
    if (!req.session.employee) {
      throw new Error('Unauthorized')
    }
    delete req.session.employee
    return { message: 'Logged out successfully' }
  },
  createCustomer: (_parent: any, { input }: any, { models }: any) => {
    const tranlate_input = models.Customer.translateAliases(input)
    return models.Customer.create(tranlate_input)
  },
  removeCustomer: async (_parent: any, { id }: any, { models }: any) => {
    // TODO: Check permission
    const deletedUser = await models.Customer.findByIdAndRemove(id)
    return deletedUser
  }
}
