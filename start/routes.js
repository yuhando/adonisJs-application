'use strict'

const Route = use('Route')

Route.group(() => {
  Route.get('/register', 'RegisterController.create').as('register.create')
  Route.post('/register', 'RegisterController.store').as('register.store').validator('Register')

  Route.get('/login', 'LoginController.create').as('login.create')
  Route.post('/login', 'LoginController.store').as('login.store')
}).middleware(['guest'])

Route.get('/', async({ response }) => {
  return response.redirect('/articles')
})

Route.group(() => {
  const controller = 'ArticleController'
  Route.get('/articles', `${controller}.index`).as('articles.index')
  Route.post('/articles', `${controller}.store`).as('articles.store')
  Route.get('/articles/:id/edit', `${controller}.edit`).as('articles.edit')
  Route.patch('/articles', `${controller}.update`).as('articles.update')
  Route.delete('/articles/:id', `${controller}.destroy`).as('articles.delete')
  Route.post('/logout', 'LoginController.destroy').as('logout')
}).middleware(['auth'])


