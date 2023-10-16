import imgCode from '../assets/img/code.png'
import phpCode from '../assets/img/php.png'
import Azis from '../assets/img/azis.jpg'

function Content ()
{
    return (
        <>
<section class="hero section" id="hero">
  <h1 class="title-hero">Azis Maulana <span>Pulungan</span></h1>
  <p class="hero-deskripsi">Hay saya adalah seorang junnior programmer disini sayua membuat website portfolio 
    <br/> Detail dan work epxerience web development
  </p>
  <a class="" href="https://drive.google.com/file/d/12Gi4aSGBd_XLmPHfw4Z0b0FJaYr_Yx1w/view?usp=sharing">Download CV</a>
  <div class="hero-images">
    <img src={Azis}/>
  </div>
</section>

<section class="blog section" id="blog">
  <h1>Blog</h1>
  <p class="blog-deskripsi">Berikut adalah beberapa artikel yang saya tulis di blog saya:</p>
  <div class="blog-posts">
    <div class="blog-post">
      <a href="pages/artikel1.html" target="_blank">
        <img src={phpCode} alt="Belajar PHP"/>
        <h3>Perjuangan Belajar Bahasa Pemrograman PHP: Dari YouTube hingga Course Gratis</h3>
      </a>
      <p>Saya akan membagikan pengalaman saya dalam belajar bahasa pemrograman teritama PHP.</p>
    </div>

    <div class="blog-post">
      <a href="pages/artike2.html" target="_blank">
        <img src={imgCode} alt="Pengalaman Ngoding"/>
        <h3>Perjalanan Belajar Menjadi Seorang Programmer Tidaklah Mudah!</h3>
      </a>
      <p>Perjuangan menjadi seoprang programmer tidaklah mudah saya akan membagikan perjuangan di artikel ini enjoy!</p>
    </div>
  </div>
</section>
        </>
    )
}

export default Content