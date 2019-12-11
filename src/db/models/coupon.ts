import { Schema, Model, model } from 'mongoose'
import { ICoupon } from '../type'
import { ObjectID } from 'bson'

export const CouponSchema: Schema = new Schema({
  _id: ObjectID,
  couponCode: {
    type: String,
    alias: 'code'
  },
  sale: String,
  expiredDate: Date,
  couponTotallity: {
    type: Number,
    alias: 'totallity'
  },
  couponRemainder: {
    type: Number,
    alias: 'remainder'
  }
})

export const Coupon: Model<ICoupon> = model<ICoupon>('Coupon', CouponSchema)
