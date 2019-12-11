export const Mutation = {
  login: async (_parent: any, { credentials }: any, { req, services }: any) => {
    const user = await services.authentication.verifyCredentials(credentials)
    req.session.user = user
    return user
  },
  createCustomer: (_parent: any, { input }: any, { models }: any) => {
    const tranlate_input = models.Customer.translateAliases(input)
    return models.Customer.create(tranlate_input)
  },
  removeCustomer: (_parent: any, { id }: any, { models }: any) =>
    models.Customer.findByIdAndRemove(id)
}
