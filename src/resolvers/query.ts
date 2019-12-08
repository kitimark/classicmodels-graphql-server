export const Query = {
  ping: (): string => 'hello world',
  customer: (_parent: any, { id }: any, { models }: any ) =>
    models.Customer.findById(id).exec(),
  customers: (_parent: any, _args: any, { models }: any) => 
    models.Customer.find({}).exec(),
  employee: (_parent: any, { id }: any, { models }: any) =>
    models.Employee.findById(id).exec(),
  employees: (_parent: any, _args: any, { models }: any) =>
    models.Employee.find({}).exec(),
  products: (_parent: any, _args: any, { models }: any) =>
    models.Product.find({}).exec(),
  scaleList: async (_parent: any, _args: any, { models }: any) => {
    const result: Array<any> = await models.Product.aggregate([{ $group: {
        _id: "$productScale"
      } 
    }]).exec()
    return result.map(obj => obj._id)
  },
  vendorList: async (_parent: any, _args: any, { models }: any) => {
    const result: Array<any> = await models.Product.aggregate([{ $group: {
        _id: "$productVendor"
      } 
    }]).exec()
    return result.map(obj => obj._id)
  }
}
