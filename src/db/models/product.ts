import { Schema, Model, model } from 'mongoose'
import { IProduct } from '../type'

export const ProductSchema: Schema = new Schema({
  productCode: {
    type: String,
    alias: 'code'
  },
  productName: {
    type: String,
    alias: 'name'
  },
  productLine: String,
  productScale: {
    type: String,
    alias: 'scale'
  },
  productVendor: {
    type: String,
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
  MSRP: Number
})

export const Product: Model<IProduct> = 
  model<IProduct>('Product', ProductSchema)
