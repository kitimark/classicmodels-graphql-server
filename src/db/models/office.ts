import { Schema, Model, model } from 'mongoose'
import { IOffice } from '../type'
import { ObjectID } from 'bson'

export const OfficeSchema: Schema = new Schema({
  officeCode: {
    type: String,
    alias: 'code'
  },
  city: String,
  phone: String,
  addressline1: String,
  addressline2: String,
  state: String,
  country: String,
  postalCode: String,
  territory: String
})

export const Office: Model<IOffice> = model<IOffice>('Office', OfficeSchema)
