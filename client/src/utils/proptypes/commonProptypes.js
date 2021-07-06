import { shape, string } from 'prop-types'

export const loginUserShape = shape({
  username: string,
  password: string,
  email: string,
  title: string
})