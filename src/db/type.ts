import { Document } from 'mongoose'
import { ObjectID } from 'mongodb'

export interface User extends Document {
  _id: ObjectID
  firstName: string
  lastName: string
}

export interface IEmployee extends User {
  extension: string
  email: string
  password: string
  officeCode: number
  reportTo?: number
  jobTitle: string
}

export interface ICustomer extends User {
  company: string
  phone: string
  addresses: Address[]
  creditLimit: number
}

export interface IOrder extends Document {
  _id: ObjectID
  orderNumber: number
  orderDate: Date
  requiredDate: Date
  shippedDate: Date
  status: string
}

export interface Address extends Document {
  addressLine1: string,
  addressLine2?: string,
  city?: string
  state?: string
  portalCode: string
  country: string
}

export interface IProduct extends Document {
  _id: ObjectID
  code: string
  name: string
  productLine: string
  scale: string
  vendor: string
  description: string
  quantityInStock: number
  buyPrice: number
  MSRP: number
}

export interface IProductline extends Document {
  _id: ObjectID
  productline: string
  textDescription: string
  htmlDescription: string
  image: string
}

export interface IOffice extends Address {
  _id: ObjectID
  code: string
  territory: string
}

export interface IPayment extends Document {
  _id: ObjectID
  checkNumber: string
  paymentDate: Date
  amount: number
}

export interface ICoupon extends Document {
  _id: ObjectID
  code: string
  sale: string
  expiredDate: Date
  totallity: number
  remainder: number
}
