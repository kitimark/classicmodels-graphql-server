import { Schema, Model, model } from 'mongoose'
import { IPayment } from '../type'

export const PaymentSchema: Schema = new Schema({
  checkNumber: String,
  paymentDate: Date,
  amount: Number
})


export const Payment: Model<IPayment> = model<IPayment>('Payment', PaymentSchema)
