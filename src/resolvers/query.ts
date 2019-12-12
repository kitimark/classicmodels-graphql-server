const authorize = (req: any, roles: string[] | undefined = undefined) => {
  if (!req.session.employee) {
    throw new Error('Unauthorized, Please Login')
  }
  if (roles) {
    const data = roles.find(role => role == req.session.employee.jobTitle)
    if (!data) {
      throw new Error(`Permission denied, ${roles} require`)
    }
  }
}

export const Query = {
  ping: (): string => 'hello world',
  me: (_parent: any, _args: any, { req }: any) => {
    authorize(req)
    return req.session.employee
  },
  customer: (_parent: any, { id }: any, { models, req }: any) =>{
    authorize(req)
    return models.Customer.findById(id).exec()
  },
  customers: (_parent: any, _args: any, { models, req }: any) => {
    authorize(req)
    return models.Customer.find({}).exec()
  },
  employee: (_parent: any, { id }: any, { models, req }: any) => {
    authorize(req)
    return models.Employee.findById(id).exec()
  },
  employees: (_parent: any, _args: any, { models, req }: any) => {
    authorize(req)
    return models.Employee.find({}).exec()
  },
  product: (_parent: any, args: any, { models }: any) => {
    const tranlate_args = models.Product.translateAliases(args)
    return models.Product.findOne(tranlate_args).exec()
  },
  products: (_parent: any, args: any, { models }: any) => {
    const tranlate_args = models.Product.translateAliases(args)
    return models.Product.find(tranlate_args).exec()
  },
  productlines: (_parent: any, args: any, { models }: any) =>
    models.Productline.find({}).exec(),
  offices: (_parent: any, args: any, { models }: any) =>
    models.Office.find({}).exec(),
  payments: (_parent: any, args: any, { models }: any) =>
    models.Payment.find({}).exec(),
  orders: (_parent: any, args: any, { models, req }: any) => {
    authorize(req)
    return models.Order.find({}).exec()
  },
  coupons: (_parent: any, args: any, { models, req }: any) => {
    authorize(req)
    return models.Coupon.find({}).exec()
  },
  scaleList: async (_parent: any, _args: any, { models }: any) => {
    const result: Array<any> = await models.Product.aggregate([
      {
        $group: {
          _id: '$productScale'
        }
      }
    ]).exec()
    return result.map(obj => obj._id)
  },
  vendorList: async (_parent: any, _args: any, { models }: any) => {
    const result: Array<any> = await models.Product.aggregate([
      {
        $group: {
          _id: '$productVendor'
        }
      }
    ]).exec()
    return result.map(obj => obj._id)
  }
}
