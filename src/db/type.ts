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
  officeCode: number
  reportTo?: number
  jobTitle: string
}

export interface ICustomer extends User{
  company: string
  phone: string
  addresses: Address[]
  creditLimit: number
}

export interface Address {
  addressLine1: string,
  addressLine2?: string,
  city?: string
  state?: string
  portalCode: string
  country: string
}
