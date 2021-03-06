'use strict'
const moment = require("moment")
const Article = use('App/Models/Article')
const Author = use('App/Models/Author')
const Status = use('App/Models/Status')

class ArticleController {
  
  async index ({ request, auth, response, view }) {
    const Database = use('Database')
    const tableArticle = 'articles'
    const tableAuthor = 'authors'
    const tableStatus = 'statuses'
    const articles = await Database.from(tableArticle)
    .select(
      `${tableArticle}.id`,
      `${tableArticle}.title`,
      `${tableArticle}.body`,
      `${tableAuthor}.id as author_id`,
      `${tableAuthor}.name as author`,
      `${tableArticle}.page_view`,
      `${tableStatus}.id as status_id`,
      `${tableStatus}.status`
      )
    .select(Database.raw(`DATE_FORMAT(${tableArticle}.date_published, "%d-%m-%Y") as date`))
    .leftJoin(tableAuthor, `${tableArticle}.author_id`,`${tableAuthor}.id`)
    .leftJoin(tableStatus, `${tableArticle}.status`,`${tableStatus}.id`)
    .orderBy(`${tableArticle}.updated_at`, `desc`)
    const authors = await Author.all()
    const statuses = await Status.all()
    const countAlphabet = await this.countAlphabet()
    return view.render('index', {
      loadArticles: articles,
      loadAuthor: authors.toJSON(),
      loadStatus: statuses.toJSON(),
      name: auth.user.username,
      alphabets: countAlphabet
    })
  }

  async store ({ request, auth, session, response }) {
    const title = request.input('title') ? request.input('title') : null
    const body = request.input('body') ? request.input('body') : null
    const author_id = request.input('author') ? request.input('author') : null
    const page_view = request.input('page_view') ? request.input('page_view') : null
    const status = request.input('status') ? request.input('status') : null
    const date_published = request.input('date') ? request.input('date')  : null
    const date = date_published ? moment(date_published,["DD-MM-YYYY", "YYYY-MM-DD"]).format("YYYY-MM-DD") : date_published
    const dataArticle = {
      title: title,
      body: body,
      date_published: date,
      author_id: author_id,
      page_view: page_view,
      status: status
    }
    try {
      await Article.create(dataArticle)
      session.flash({ successMessage: 'Article was added!' })
    } catch (error) {
      session.flash({ errorMessage: error.message })
    }

    return response.redirect('back')
  }

  async update ({ params, auth, session, request, response }) {
    const id = request.input('atc_id') ? request.input('atc_id') : null
    const title = request.input('editTitle') ? request.input('editTitle') : null
    const body = request.input('editBody') ? request.input('editBody') : null
    const author_id = request.input('editAuthor') ? request.input('editAuthor') : null
    const page_view = request.input('editPageView') ? request.input('editPageView') : null
    const status = request.input('editStatus') ? request.input('editStatus') : null
    const date_published = request.input('date') ? request.input('date')  : null
    const date = date_published ? moment(date_published,["DD-MM-YYYY", "YYYY-MM-DD"]).format("YYYY-MM-DD") : date_published
    
    try {
      let update = await Article.findBy('id', id)
      if(title) update.title = title
      if(body) update.body = body
      if(date_published) update.date_published = date
      if(author_id) update.author_id = author_id
      if(page_view) update.page_view = page_view
      if(status) update.status = status
      await update.save()
      session.flash({ successMessage: 'Article was edited!' })
    } catch (error) {
      session.flash({ errorMessage: error.message })
    }

    return response.route('articles.index')
  }

  async destroy ({ params, auth, session, request, response }) {
    const article = await Article.findOrFail(params.id)
    await article.delete()

    session.flash({ successMessage: 'Article was deleted successfully!' })
    return response.redirect('back')
  }

  async countAlphabet () {
    let content = "Perjalanan penuh kisah milik bangsa Indonesia dan dunia dalam kurun waktu setengah abad ini telah terabadikan. Pada 28 Juni 2015, usia 50 tahun dicapai oleh harian umum yang didirikan PK Ojong (1920????????1980) dan Jakob Oetama ini. Usia emas menjadi pertanda harian ini mampu terus hadir menemani langkah-langkah Indonesia untuk terus menginspirasi dan menjadi Amanat Hati Nurani Rakyat.Dalam rangka merayakan usia 50 tahun ini, Kompas mengadakan acara Inspira(k)si. Acara ini mencakup berbagai macam program, yaitu Inspi Baca, Inspi Kendara, Inspi Sinema, Inspi Rasa, Inspi Rehat, dan Inspi Vision. Untuk dapat turut serta dalam program-program tersebut, pembaca Kompas bisa memanfaatkan kupon-kupon yang ada di koran ini pada edisi 28 Juni.Berbagai promosi menarik di tiap Inspi dapat dinikmati dengan menyertakan koran Kompas dan memiliki kartu Flazz BCA atau Mandiri e-money. Inspi Baca mempersembahkan potongan harga senilai Rp 50.000. Inspi Rasa, Inspi Rehat, dan Inspi Vision menghadirkan diskon 50 persen. Sementara itu, pembaca Kompas juga dapat menikmati Inspi Kendara naik Transjakarta serta Inspi Cinema dengan menonton film Terminator dan Minions di beberapa studio Bioskop XXI hanya dengan Rp 50.Puncak acara Inspira(k)si digelar di Plaza Selatan, Gelora Bung Karno, Jakarta, melalui Inspi Rasa. Mulai Pasar Subuh yang berlangsung pukul 05.00-10.00, dilanjutkan pada pukul 10.00????????22.00 dengan bazar kuliner untuk berbuka puasa dan produk-produk industri kreatif. Acara makin meriah dengan gelaran Ramadhan Jazz yang menghadirkan musisi Jazz Tanah Air, yaitu Tompi, MawarDirie (Iga Mawarni, Dian HP, Rieka Roslan, dan Troubadours Band), Endah n Resha, Iwan Abdhi, The Groove, dan Kunto Aji.Rieka menyampaikan harapannya untuk Kompas, ???????Semoga Kompas dapat terus menjadi surat kabar yang memberikan inspirasi. Karena dari aku kecil, ayahku sering menyuruh aku untuk baca Kompas. Hingga akhirnya menjadi terbiasa sampai aku dewasa. Kata bapakku, baca Kompas agar kamu bisa menjadi musisi yang tidak sekadar bisa menyanyi. Aku merasakan manfaatnya, misalnya saja ketika berada di panggung pun aku jadi punya bahan untuk di-obrolin karena aku mengikuti perkembangan dunia ekonomi, politik, dan sosial yang terjadi. Di mana hal ini penting.???????Ia menambahkan, Kompas menjadi media yang konsisten dan memberikan lahan yang cukup besar untuk menginformasikan budaya Indonesia. ???????Ini bagus karena dapat memberikan inspirasi bagi masyarakat Indonesia, khususnya generasi muda untuk makin mencintai Indonesia. Tanpa budaya, saya kira kita bukan apa-apa.???????Lintas generasiSebagai harian umum yang telah berusia 50 tahun, Kompas tetap berupaya agar generasi muda juga dapat terus mengenal dan membaca Kompas. Penyanyi Kunto Aji mengapresiasi acara yang dihelat Kompas ini.???????Ini merupakan acara yang bagus dan menarik sekali. Saya mengucapkan selamat ulang tahun, Kompas. Semoga dengan usia 50, Kompas semakin emas di industri media. Terus menjadi media yang obyektif, netral, jadi acuan bagi para pembaca, dan tepercaya,??????? ujar Kunto yang terkenal dengan lagu ???????Terlalu Lama Sendiri???????.Para pengunjung Inspi Rasa, contohnya Ana (60) dari Rawamangun, mengatakan, dirinya memang sudah merencanakan jauh-jauh hari untuk ikut serta memeriahkan ulang tahun Kompas. ???????Saya datang ke area Inspi Rasa bersama keluarga. Dapat informasi tentang acara ini dari iklan di Kompas. Setelah pulang dari beribadah pukul 10, langsung meluncur ke sini. Saya sudah lama berlangganan koran ini. Kompas memberikan informasi berita yang berkualitas dan dapat menjadi referensi yang bagus.???????Selain Ana, kemeriahan ulang tahun Kompas juga dirasakan oleh Kartika (21) dan Tari (20), warga Kebon Jeruk, Jakarta. Menurut mereka, perayaan pesta emas Kompas terasa sangat menyenangkan.Di Inspi Rasa, mereka sangat menantikan penampilan Endah n Resha dan Kunto Aji. Mereka berharap agar Kompas dapat terus hadir menemani Indonesia dan memberikan inspirasi bagi generasi muda untuk berprestasi."
    content = (content.replace(/[^a-z]/gi, '')).toUpperCase()
    let object = {}
    let chararcter, count;
    for (let index = 0; index < content.length; index++) {
      chararcter = content.charAt(index)
      count = object[chararcter]
      object[chararcter] = count ? count + 1 : 1
    }
    
    const alphabetCounted = {}
    for (chararcter in object) {
      alphabetCounted[chararcter] = object[chararcter]
    }
    
    const ordered = Object.keys(alphabetCounted).sort().reduce(
      (obj, key) => { 
        obj[key] = alphabetCounted[key]; 
        return obj;
      }, 
      {}
    );
    return ordered
  }
}

module.exports = ArticleController
