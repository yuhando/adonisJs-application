'use strict'

/*
|--------------------------------------------------------------------------
| StatusSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const Status = use('App/Models/Status')
class StatusSeeder {
  static async run () {
    await Status.create({ id: 0,status: 'unpublish'})
    await Status.create({ id: 1,status: 'publish'})
  }
}

module.exports = StatusSeeder
