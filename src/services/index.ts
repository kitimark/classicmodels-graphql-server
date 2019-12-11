import { BcryptHasher } from "./hash";
import { Authentication } from "./authenticate";
import { Employee } from "../db/models";

const hasher = new BcryptHasher()
const authentication = new Authentication(Employee, hasher)

export default {
  hasher,
  authentication
}