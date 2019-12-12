import { Schema, model, Model } from 'mongoose'

import { IOrder } from '../type'
import { ObjectID } from 'bson'

export const OrderSchema: Schema = new Schema({
  orderNumber: Number,
  orderDate: Date,
  requiredDate: Date,
  shippedDate: Date,
  status: String,
  customer_id: ObjectID
})

export const Order: Model<IOrder> =
model<IOrder>('Order',OrderSchema)
