'use strict'

class LoginController {

  async create ({ request, response, view }) {
    return view.render('login')
  }

  async store ({ request, auth, session, response }) {
    await auth.attempt(request.input('email'), request.input('password'))

    session.flash({ successMessage: 'You have logged in successfully!' })
    return response.route('todos.index')
  }

  async destroy ({ params, auth, request, response }) {
    await auth.logout()

    return response.route('login.store')
  }
}

module.exports = LoginController
