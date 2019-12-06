import { Document } from 'mongoose'
import { ObjectID } from 'mongodb'

export interface ICustomer extends Document{
  _id: ObjectID
  firstName: string
  lastName: string
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
