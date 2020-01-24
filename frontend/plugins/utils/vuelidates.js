export const validateUserName = (validate) => {
  const errors = []
  if (!validate.$dirty) { return errors }
  !validate.minLength && errors.push('UserName must be at 4 charactors long')
  !validate.maxLength && errors.push('UserName must be at 32 charactors short')
  !validate.required && errors.push('userName is required')
  return errors
}

export const validateEmail = (validate) => {
  const errors = []
  if (!validate.$dirty) { return errors }
  !validate.email && errors.push('Please input in email format')
  !validate.required && errors.push('Email is required')
  return errors
}

export const validatePassword = (validate) => {
  const errors = []
  if (!validate.$dirty) { return errors }
  !validate.minLength && errors.push('Password must be at 6 charactors long')
  !validate.maxLength && errors.push('Password must be at 64 chractors short')
  !validate.required && errors.push('Password is required')
  return errors
}
