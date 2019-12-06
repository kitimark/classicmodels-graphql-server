import { Schema, Model, model } from 'mongoose'

import { ICustomer } from '../type'

export const CustomerShema: Schema = new Schema({
  contactFirstName: {
    type: String,
    alias: 'firstName'
  },
  contactLastName: {
    type: String,
    alias: 'lastName'
  }
})

export const Customer: Model<ICustomer> = 
  model<ICustomer>('Customer', CustomerShema)
