'use strict'

/*
|--------------------------------------------------------------------------
| AuthorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Author = use('App/Models/Author')
class AuthorSeeder {
  static async run () {
    await Author.create({ name: 'Reporter 1'})
    await Author.create({ name: 'Reporter 2'})
    await Author.create({ name: 'Reporter 3'})
    await Author.create({ name: 'Reporter 4'})
    await Author.create({ name: 'Reporter 5'})
  }
}

module.exports = AuthorSeeder
