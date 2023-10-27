import Azis from '../assets/img/azism.jpeg'
import ArtikelComponent from '../components/ArtikelComponent'

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
  <a className="" href="https://drive.google.com/file/d/15-aA2o_19EMdPs9hQoljjgg9H-TEg_pi/view?usp=sharing">Download CV</a>
  <div className="col-9">
  <div className="hero-images">
    <img src={Azis}/>
  </div>
  </div>
</section>
            </div>
          </div>
        </div>

        <ArtikelComponent/>

        </>
    )
}

export default Content