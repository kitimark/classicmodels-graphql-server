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
  createEmployee: async (_parent: any, { input }: any, { models, services }: any) => {
    // hash password
    const hashedPassword = await services.hasher.hashPassword(input.password)
    input.password = hashedPassword

    const tranlate_input = models.Employee.translateAliases(input)
    // TODO: add reportsTo property
    return models.Employee.create(tranlate_input)
  },
  removeEmployee: async (_parent: any, { id }: any, { models }: any) => {
    const deleteEmployee = await models.Employee.findByIdAndRemove(id)
    return deleteEmployee
  },
  createCustomer: (_parent: any, { input }: any, { models }: any) => {
    const tranlate_input = models.Customer.translateAliases(input)
    return models.Customer.create(tranlate_input)
  },
  removeCustomer: async (_parent: any, { id }: any, { models }: any) => {
    // TODO: Check permission
    const deletedUser = await models.Customer.findByIdAndRemove(id)
    return deletedUser
  },
  removeProduct: async (_parent: any, { id }: any, { models }: any) => { 
    const deleteProduct = await models.Product.findByIdAndRemove(id)
    return deleteProduct
  }
}
