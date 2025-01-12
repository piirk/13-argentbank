export class User {
  id: number
  firstName: string
  lastName: string
  email: string
  createdAt: Date
  updatedAt: Date

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}
