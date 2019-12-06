import { Schema, Model, model } from 'mongoose'
import { IEmployee } from '../type'

export const EmployeeSchema: Schema = new Schema({
  firstName: String,
  lastName: String,
  extension: String,
  email: String,
  officeCode: String,
  reportsTo: Number,
  jobTitle: String
})

export const Employee: Model<IEmployee> = 
  model<IEmployee>('Employee', EmployeeSchema)
