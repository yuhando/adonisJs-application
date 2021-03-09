'use strict'

const UserSeeder = require('./UserSeeder')
const AuthorSeeder = require('./AuthorSeeder')
const StatusSeeder = require('./StatusSeeder')
const ArticleSeeder = require('./ArticleSeeder')
const MetaArticleSeeder = require('./MetaArticleSeeder')

class DatabaseSeeder {
  async run () {
    // Put yours seeders in the desired order and run this : adonis seed --files DatabaseSeeder.js
    await UserSeeder.run()
    await AuthorSeeder.run()
    await StatusSeeder.run()
    await ArticleSeeder.run()
    await MetaArticleSeeder.run()
  }
}

module.exports = DatabaseSeeder
