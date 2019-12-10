import { Schema, Model, model } from 'mongoose'
import { IProductline } from '../type'

export const ProductlineSchema: Schema = new Schema({
  productline: String,
  textDescription: String,
  htmlDescription: String,
  image: String
})

export const Productline: Model<IProductline> = model<IProductline>('Productline', ProductlineSchema)
