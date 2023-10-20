import imgCode from '../assets/img/code.png'
import phpCode from '../assets/img/php.png'
import Azis from '../assets/img/azism.jpeg'

function Content ()
{
    return (
        <>
        <div className="container">
          <div className="row">
            <div className="col">
              <section className="hero section" id="hero">
  <h1 className="title-hero">Azis Maulana <span>Pulungan</span></h1>
  <p className="hero-deskripsi">Selamat datang di laman resmi saya!

Saya memulai perjalanan saya dalam dunia pemrograman sebagai seorang programmer junior, namun jangan biarkan gelar "junior" tersebut mengecilkan apa yang telah saya pelajari dan kerjakan. Setiap baris kode yang saya tulis adalah bukti dari komitmen, ketekunan, dan hasrat saya untuk terus belajar dan berkembang. 
    <br/> Detail dan work epxerience web development
  </p>
  <a className="" href="https://drive.google.com/file/d/1HHUcJ_UbE6b9r4d5_K3bZgTlgehlfF4L/view?usp=sharing">Download CV</a>
  <div className="col-9">
  <div className="hero-images">
    <img src={Azis}/>
  </div>
  </div>
</section>
            </div>
          </div>
        </div>

<div className="container">
  <div className="row">
    <div className="col">
        <section className="blog section" id="blog">
  <h1>Blog</h1>
  <p className="blog-deskripsi">Berikut adalah beberapa artikel yang saya tulis di blog saya:</p>
  <div className="blog-posts">
    <div className="blog-post">
      <a href="pages/artikel1.html" target="_blank">
        <img src={phpCode} alt="Belajar PHP"/>
        <h3>Perjuangan Belajar Bahasa Pemrograman PHP: Dari YouTube hingga Course Gratis</h3>
      </a>
      <p>Saya akan membagikan pengalaman saya dalam belajar bahasa pemrograman teritama PHP.</p>
    </div>
<div className="col">
       <div className="blog-post">
      <a href="pages/artike2.html" target="_blank">
        <img src={imgCode} alt="Pengalaman Ngoding"/>
        <h3>Perjalanan Belajar Menjadi Seorang Programmer Tidaklah Mudah!</h3>
      </a>
      <p>Perjuangan menjadi seoprang programmer tidaklah mudah saya akan membagikan perjuangan di artikel ini enjoy!</p>
    </div>
  </div>
</div>
</section>
    </div>
  </div>
</div>
        </>
    )
}

export default Content