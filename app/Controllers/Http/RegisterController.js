'use strict'

const User = use('App/Models/User')

class RegisterController {
  
  async create ({ request, response, view }) {
    return view.render('register')
  }

  async passwordValidator (password = null) {
    let message = null
    if(password == null) return message = "parameter is null"
    const regex2Capital = new RegExp("^(?=(.*[A-Z]){2,})")
    if(!regex2Capital.test(password)) return message = "The Password must contain at least 2 uppercase alphabetical character"

    const regex5NonCapital = new RegExp("^(?=(.*[a-z]){5,})")
    if(!regex5NonCapital.test(password)) return message = "The Password must contain at least 5 lowercase alphabetical character"
    
    const regexSpecialChar = new RegExp("^(?=.*[!@#$%^&*()+\-])")
    if(!regexSpecialChar.test(password)) return message = "The Password must contain at least one special character"

    const regex2Number = new RegExp("^(?=(.*[0-9]){2,})")
    if(!regex2Number.test(password)) return message = "The Password must contain at least 2 numberic character"

    const regex10to20 = new RegExp("^(?=.{10,20}$)")
    if(!regex10to20.test(password)) return message = "The Password must be mininum 10 characters and maximum 20 characters"

    const regexDuplicate = (/([a-zA-Z0-9!@#$%^&*()+\-]).*?\1/)
    if(regexDuplicate.test(password)) return message = "The Password Must not have more than 2x repetitive characters"
  }

  async store ({ request, session, response }) {
    const passwordValidator = await this.passwordValidator(request.input('password'))
    if(passwordValidator) {
      console.log(passwordValidator)
      session.flash({ errorMessage: passwordValidator })
      return response.redirect('/register')
    }
    try {
      const user = await User.create({
        username: request.input('email'),
        email: request.input('email'),
        password: request.input('password')
      })
      session.flash({ successMessage: 'You have registered successfully!' })
      return response.redirect('/login')
    } catch (error) {
      session.flash({ errorMessage: error.message }) 
      return response.redirect('/register')
    }
  }
}

module.exports = RegisterController
