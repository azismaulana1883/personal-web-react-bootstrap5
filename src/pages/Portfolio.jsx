import React from 'react'
import imgHtml from '../assets/img/html-css.png'
import imgJS from '../assets/img/javascript.png'
import imgPHP from '../assets/img/php.png'
import imgMysql from '../assets/img/mysql.png'
import imgGithub from '../assets/img/github.png'
import imgReact from '../assets/img/react.png'
import imgLaravel from '../assets/img/laravel.png'
import imgSkilvulJs from '../assets/img/skilvuljs.png'
import imgGithubCodePolitan from '../assets/img/githubcodepolitan.png'
import imgJSDasar from '../assets/img/skilvuljsdasar.png'
import imgSoloLearnPHP from '../assets/img/sololearnphp.png'
import imgHacktiv8 from '../assets/img/hacktiv8sertif.png'
import imgSoloLearnMysql from '../assets/img/sololearnmysql.png'

export default function Portfolio() {
  return (
    <>
        {/* <!-- MAIN --> */}
    <main className="main">
      {/* <!-- PORTFOLIO --> */}
      <section className="portfolio section" id="portfolio">
        <h1 className="portofolio-header">Portfolio</h1>
        <p className="portfolio-deskripsi">Sebagai seorang Fullstack Web Developer, saya, Azis Maulana, telah mengembangkan berbagai proyek web dengan memanfaatkan kemampuan saya dalam HTML&CSS, Javascript, dan PHP. Dengan database MySQL sebagai pendukung backend, saya telah menciptakan aplikasi yang handal dan efisien. Saya membanggakan diri dengan kemampuan saya dalam menggunakan framework Laravel dan CodeIgniter, yang memungkinkan saya untuk mengembangkan solusi backend yang cepat dan aman. Di sisi frontend, penggunaan Bootstrap dalam portofolio saya mencerminkan komitmen saya untuk menciptakan tampilan yang responsif dan estetis. Dengan keahlian ini, saya telah sukses menyelesaikan berbagai proyek yang memuaskan kebutuhan klien saya, memastikan setiap detail dikembangkan dengan standar tertinggi.</p>
        
        <div className="portfolio-images">
            <img src={imgHtml} alt="html" className="portfolio-img"/>
            <img src={imgJS} alt="javascript" className="portfolio-img"/>
            <img src={imgPHP} alt="php" className="portfolio-img"/>
            <img src={imgMysql} alt="mysql" className="portfolio-img"/>
            <img src={imgGithub} alt="github" className="portfolio-img"/>
            <img src={imgReact} alt="react" className="portfolio-img" />
            <img src={imgLaravel} alt="laravel" className="portfolio-img" />
        </div>
        
        {/* <!-- Bagian Skill --> */}
        <div className="skills" id="skill">
            <h2>My Skills</h2>
            <p>HTML & CSS</p>
            <p>JavaScript</p>
            <p>PHP</p>
            <p>Mysql</p>
            <p>Github</p>
            <p>React</p>
            <p>Laravel</p>
        </div>
    </section>
    {/* <!-- Sertifikat --> */}

    <section className="sertifikat">
      <h1 className="title-sertifikat">My Sertifikat</h1>
      <p className="sertifikat-deskripsi">Berikut ini adalah kumpulan sertifikat yang saya telah saya capai dalam upaya mewujudkan cita-cita saya</p>
      <div className="foto-sertifikat">
        <div className="image-sertifikat">
          <img className="profile-sertifikat" src={imgSkilvulJs} alt="sertifikat skilvul JS intermediate"/>
          <img className="profile-sertifikat" src={imgGithubCodePolitan} alt="sertifikat github"/>
          <img className="profile-sertifikat" src={imgJSDasar} alt="sertifikat skilvul js dasar"/>
          <img className="profile-sertifikat" src={imgSoloLearnPHP} alt="Solo learn php sertifikat"/>
          <img className="profile-sertifikat" src={imgHacktiv8} alt="Sertifikat hacktiv8"/>
          <img className="profile-sertifikat" src={imgSoloLearnMysql} alt="Solo Learn mysql sertifikat"/>
        </div>
      </div>
    </section>
    </main>
    </>
  )
}
