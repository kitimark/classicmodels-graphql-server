import { genSalt, hash, compare } from 'bcryptjs'

export class BcryptHasher {
  constructor(private readonly rounds: number = 10) {}

  async hashPassword(password: string): Promise<String> {
    const salt = await genSalt(this.rounds)
    return hash(password, salt)
  }

  async comparePassword(
    providedPass: string,
    storedPass: string
  ): Promise<boolean> {
    const passwordIsMatched = await compare(providedPass, storedPass)
    return passwordIsMatched
  }
}
