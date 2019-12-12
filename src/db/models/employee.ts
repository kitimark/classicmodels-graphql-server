import { Schema, Model, model } from 'mongoose'
import { IEmployee } from '../type'
import { ObjectID } from 'bson'

export const EmployeeSchema: Schema = new Schema({
  firstName: String,
  lastName: String,
  extension: String,
  email: String,
  password: String,
  officeCode: String,
  reportsTo: Number,
  jobTitle: String,
  office_id: ObjectID
})

export const Employee: Model<IEmployee> = model<IEmployee>('Employee', EmployeeSchema)
