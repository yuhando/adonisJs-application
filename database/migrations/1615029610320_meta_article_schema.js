'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MetaArticleSchema extends Schema {
  up () {
    this.create('meta_articles', (table) => {
      table.increments()
      table.integer('post_id')
      table.string('meta_key')
      table.string('meta_value')
      table.timestamps()
    })
  }

  down () {
    this.drop('meta_articles')
  }
}

module.exports = MetaArticleSchema