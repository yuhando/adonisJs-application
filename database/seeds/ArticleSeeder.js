'use strict'

/*
|--------------------------------------------------------------------------
| ArtikelSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Article = use('App/Models/Article')
class ArtikelSeeder {
  static async run () {
    await Article.create({ title: 'Suatu Sore di Pelabuhan Sunda Kelapa',body: 'Suatu sore yang terik pada pertengahan Februari 2019, sejumlah remaja naik ke atas kapal layar motor Sinar Keluarga yang bersandar di Pelabuhan Sunda Kelapa, Jakarta Utara. Sesampainya di anjong (segitiga penyeimbang) yang berada di bagian depan kapal, mereka bergantian melompat. Byur, byur, prakk suara tubuh bertemu dengan air laut, susul menyusul. Sementara buruh bongkar muat di sebelahnya terus bekerja, mengangkut muatan, memindahkan barang dari truk ke kapal.',date_published: '2020-01-02 00:00:00', author_id: 4,page_view: 100000,status: 1})
    await Article.create({ title: 'Gosip Merger Perusahaan Teknologi di Sekitar Kita',body: 'Kabar rencana merger antara Gojek dan Grab serta Gojek dan Tokopedia menarik dicermati karena melibatkan dana yang sangat besar dan dapat mengubah dominasi bisnis berbasis daring.',date_published: '2020-01-01 15:13:14', author_id: 3,page_view: 150000,status: 1})
    await Article.create({ title: 'Universitas Lampung KKN Tatap Muka, 4.300 Mahasiswa Wajib Tes Cepat',body: 'Sebanyak 4.300 mahasiswa Universitas Lampung akan mengikuti kegiatan Kuliah Kerja Nyata (KKN) tatap muka mulai 26 Januari 2021. Sebelum diterjunkan ke desa-desa, para mahasiswa itu wajib menjalani tes cepat Covid-19.',date_published: '2020-01-10 17:18:00', author_id: 2,page_view: 300000,status: 0})
    await Article.create({ title: 'Kisah Berulang Penguasaan Partai di Sumatera Barat',body: 'Meski memiliki modal penguasaan hingga dua pertiga wilayah di Sumbar dalam Pemilu 2019, mesin partai dari Gerindra kesulitan untuk mengulang dominasi serupa dalam Pilkada 2020.',date_published: '2020-09-20 19:00:00', author_id: 1,page_view: 400000,status: 1})
    await Article.create({ title: 'Kapolda Metro Jaya Beri Tugas Penanganan Covid-19 kepada 15 Pejabat Baru',body: 'Inspektur Jenderal M Fadil Imran meminta para pejabat baru segera melakukan langkah-langkah taktis yang tidak tanggung-tanggung di lapangan guna turut mengendalikan wabah Covid-19.',date_published: '2020-12-31 23:59:59', author_id: 2,page_view: 600000,status: 1})
  }
}

module.exports = ArtikelSeeder
