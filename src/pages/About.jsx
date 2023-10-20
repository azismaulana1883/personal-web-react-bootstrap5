import imgMail from '../assets/img/gmail.jpg'
import imgLinkedIn from '../assets/img/linkedin.png'
import imgWhatsApp from '../assets/img/whatsapp.jpg'
import imgUser from '../assets/img/user.jpg'

function About ()
{
    return (
        <>
            <main class="main">
      {/* <!-- ABOUT ME --> */}
      <section class="about section" id="about">
        <img class="profile-banner" src={imgUser} alt="Foto Anda"/>
        <h1 class="title-profile">About Me</h1>
        <p class="description">Halo, perkenalkan saya Azis Maulana. Sebagai seorang Fullstack Web Developer, saya memadukan kemahiran teknis dan estetika untuk menghadirkan solusi web yang efisien dan menarik. Kecakapan saya dalam bahasa pemrograman meliputi HTML&CSS dan Javascript, yang memungkinkan saya untuk membangun tampilan website yang responsif dan interaktif. Tidak berhenti di sana, saya juga memanfaatkan PHP untuk memastikan bahwa setiap fungsionalitas website berjalan dengan sempurna, serta mengintegrasikan dengan database MySQL untuk pengolahan data yang optimal.
        
        Ketika berbicara tentang kerangka kerja, saya memilih Laravel dan CodeIgniter sebagai andalan saya untuk pengembangan backend. Kedua framework ini, dengan fitur-fitur mereka yang robust, memungkinkan saya untuk mempercepat proses pengembangan sekaligus memastikan keamanan dan efisiensi. Di sisi frontend, saya mengandalkan Bootstrap untuk menciptakan tampilan yang elegan dan responsif, sehingga pengguna dapat menikmati pengalaman navigasi yang halus dan menyenangkan.
          
        Dengan kombinasi keahlian ini, saya selalu siap untuk menghadirkan solusi web terbaik untuk kebutuhan Anda.</p>
      </section>

      {/* <!-- KONTAK --> */}
<section class="kontak section" id="kontak">
  <h1>Hubungi Saya</h1>
  <p>Anda dapat menghubungi saya melalui:</p>
  <div class="kontak-info">
      <a href="mailto:azis.maulana1883@gmail.com" class="kontak-item">
          <img src={imgMail} alt="Email"/>
          <span>Email: azis.maulana1883@gmail.com</span>
      </a>
      <a href="https://www.linkedin.com/in/azis-maulana-9b6501156/" target="_blank" class="kontak-item">
          <img src={imgLinkedIn} alt="LinkedIn"/>
          <span>LinkedIn: Azis Maulana</span>
      </a>
      <a href="https://wa.me/+6285155337432" class="kontak-item">
          <img src={imgWhatsApp} alt="Telepon"/>
          <span>Telepon: 0851-5533-7432</span>
      </a>
  </div>
</section>

    </main>
        </>
    )
}

export default About