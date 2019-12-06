import { Document } from 'mongoose'
import { ObjectID } from 'mongodb'

export interface ICustomer extends Document{
  _id: ObjectID
  firstName: string
  lastName: string
}
