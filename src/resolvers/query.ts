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
    models.Product.find({}).exec()
}
