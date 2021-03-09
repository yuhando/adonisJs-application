'use strict'

/*
|--------------------------------------------------------------------------
| MetaArtikelSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const MetaArticle = use('App/Models/MetaArticle')
class MetaArtikelSeeder {
  static async run () {
    await MetaArticle.create({ post_id: '1',meta_key: 'sponsor',meta_value: 'Kompas'})
    await MetaArticle.create({ post_id: '1',meta_key: 'sumber',meta_value: 'Kompas'})
    await MetaArticle.create({ post_id: '2',meta_key: 'sumber',meta_value: 'Kontan'})
    await MetaArticle.create({ post_id: '2',meta_key: 'sponsor',meta_value: 'Kompas'})
    await MetaArticle.create({ post_id: '3',meta_key: 'Photographer',meta_value: 'Photographer 1'})
    await MetaArticle.create({ post_id: '4',meta_key: 'photographer',meta_value: 'Photographer 4'})
  }
}

module.exports = MetaArtikelSeeder
