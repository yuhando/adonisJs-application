'use strict'

class Register {
  get rules () {
    return {
      email: 'required|email|unique:users',
      password: 'required|confirmed',
    }
  }

  get messages () {
    return {
      'email.required': 'The email field is required',
      'email.email': 'Enter a valid email address',
      'email.unique': 'Email already exists',
      'password.required': 'The password field is required',
      'password.confirmed': 'The password fields do not match',
    }
  }
}

module.exports = Register
