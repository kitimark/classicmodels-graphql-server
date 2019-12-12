import { Schema, Model, model } from 'mongoose'
import { IPayment } from '../type'
import { ObjectID } from 'bson'

export const PaymentSchema: Schema = new Schema({
  checkNumber: String,
  paymentDate: Date,
  amount: Number,
  customer_id: ObjectID
})


export const Payment: Model<IPayment> = model<IPayment>('Payment', PaymentSchema)
