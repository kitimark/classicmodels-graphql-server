import { Schema, Model, model } from 'mongoose'
import { IProduct } from '../type'
import { ObjectID } from 'bson'

export const ProductSchema: Schema = new Schema({
  productCode: {
    type: String,
    unique: true,
    index: true,
    alias: 'code'
  },
  productName: {
    type: String,
    alias: 'name'
  },
  productLine: String,
  productScale: {
    type: String,
    index: true,
    alias: 'scale'
  },
  productVendor: {
    type: String,
    index: true,
    alias: 'vendor'
  },
  productDescription: {
    type: String,
    alias: 'description'
  },
  quantityInStock: {
    type: Number,
    alias: 'quantity'
  },
  buyPrice: Number,
  MSRP: Number,
  productline_id: ObjectID
})

export const Product: Model<IProduct> = model<IProduct>('Product', ProductSchema)
