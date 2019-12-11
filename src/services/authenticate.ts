import { BcryptHasher } from './hash'
import { Model } from 'mongoose'
import { IEmployee } from '../db/type'

export interface Credentials {
  email: string
  password: string
}

export class Authentication {
  constructor(
    public employee: Model<IEmployee>,
    public passwordHasher: BcryptHasher
  ) {}

  async verifyCredentials(credentials: Credentials): Promise<IEmployee> {
    const invaildCredentialsError = 'Invalid username or password'

    const foundUser = await this.employee.findOne({ email: credentials.email })

    if (!foundUser) {
      throw new Error(invaildCredentialsError)
    }

    const passwordMatched = await this.passwordHasher.comparePassword(
      credentials.password,
      foundUser.password
    )

    if (!passwordMatched) {
      throw new Error(invaildCredentialsError)
    }

    return foundUser
  }
}
