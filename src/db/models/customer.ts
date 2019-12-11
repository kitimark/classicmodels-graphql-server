import { Schema, Model, model } from 'mongoose'

import { ICustomer } from '../type'
import { ObjectID } from 'bson'

export const AddressSchema: Schema = new Schema({
  addressLine1: String,
  addressLine2: String,
  city: String,
  state: String,
  postalCode: String,
  country: String
})

export const CustomerSchema: Schema = new Schema({
  _id: ObjectID,
  contactFirstName: {
    type: String,
    alias: 'firstName'
  },
  contactLastName: {
    type: String,
    alias: 'lastName'
  },
  customerName: {
    type: String,
    alias: 'company'
  },
  phone: String,
  addresses: [AddressSchema],
  creditLimit: Number,
  salesRepEmployee_id: ObjectID
})

export const Customer: Model<ICustomer> = model<ICustomer>('Customer', CustomerSchema)
