import { authorize } from '../services/authenticate'
import { Types } from 'mongoose'

export const Mutation = {
  login: async (_parent: any, { credentials }: any, { req, services }: any) => {
    const employee = await services.authentication.verifyCredentials(
      credentials
    )
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
  createEmployee: async (
    _parent: any,
    { input }: any,
    { models, services, req }: any
  ) => {
    authorize(req, ['VP Sale', 'President'])
    // hash password
    const hashedPassword = await services.hasher.hashPassword(input.password)
    input.password = hashedPassword

    const tranlate_input = models.Employee.translateAliases(input)
    // TODO: add reportsTo property
    return models.Employee.create(tranlate_input)
  },
  removeEmployee: async (_parent: any, { id }: any, { models, req }: any) => {
    authorize(req, ['VP Sale', 'President'])
    const deleteEmployee = await models.Employee.findByIdAndRemove(id)
    return deleteEmployee
  },
  createCustomer: (_parent: any, { input }: any, { models }: any) => {
    const tranlate_input = models.Customer.translateAliases(input)
    return models.Customer.create(tranlate_input)
  },
  updateCustomer: async (
    _parent: any,
    { id, input }: any,
    { models, req }: any
  ) => {
    authorize(req)
    const tranlate_input = models.Customer.translateAliases(input)
    const updateUser = await models.Customer.findOneAndUpdate(
      {
        _id: Types.ObjectId(id)
      },
      tranlate_input
    )
    return updateUser
  },
  removeCustomer: async (_parent: any, { id }: any, { models, req }: any) => {
    authorize(req)
    // TODO: Check permission
    const deletedUser = await models.Customer.findByIdAndRemove(id)
    return deletedUser
  },
  removeProduct: async (_parent: any, { id }: any, { models }: any) => {
    const deleteProduct = await models.Product.findByIdAndRemove(id)
    return deleteProduct
  },
  createCoupon: async (_parent: any, { input }: any, { models, req }: any) => {
    authorize(req, ['Vp Marketing', 'President'])
    input.remainder = input.totallity
    const tranlate_input = models.Coupon.translateAliases(input)
    return models.Coupon.create(tranlate_input)
  },
  removeCoupon: async (_parent: any, { id }: any, { models, req }: any) => {
    authorize(req, ['Vp Marketing', 'President'])
    const deleteCoupon = await models.Coupon.findByIdAndRemove(id)
    return deleteCoupon
  }
}
