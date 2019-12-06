export const Query = {
  ping: (): string => 'hello world',
  customers: (_parent: any, _args: any, { models }: any) => 
    models.Customer.find({}).exec(),
  employees: (_parent: any, _args: any, { models }: any) =>
    models.Employee.find({}).exec(),
  products: (_parent: any, _args: any, { models }: any) =>
    models.Product.find({}).exec()
}
