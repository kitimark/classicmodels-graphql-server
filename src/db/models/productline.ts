import { Schema, Model, model } from 'mongoose'
import { IProductline } from '../type'
import { ObjectID } from 'bson'

export const ProductlineSchema: Schema = new Schema({
  _id: ObjectID,
  productline: String,
  textDescription: String,
  htmlDescription: String,
  image: String
})

export const Productline: Model<IProductline> = model<IProductline>('Productline', ProductlineSchema)
