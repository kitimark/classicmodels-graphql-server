import { Schema, model, Model } from 'mongoose'

import { IOrder } from '../type'

export const OrderSchema: Schema = new Schema({
  orderNumber: Number,
  orderDate: Date,
  requiredDate: Date,
  shippedDate: Date,
  status: String,
})

export const Order: Model<IOrder> =
model<IOrder>('Order',OrderSchema)
