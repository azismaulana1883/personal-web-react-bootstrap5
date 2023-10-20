import React from 'react'

import imgSMA from '../assets/img/sma-mutiara.png'
import imgKasir from '../assets/img/kasir.png'

export default function Pengalaman() {
  return (
    <>
        {/* <!-- MAIN --> */}
    <main className="main">
      {/* <!-- Pengalaman Kerja --> */}
      <section className="pengalaman section" id="pengalaman">
        <h1 className="pengalaman-kerja">Peengalaman Kerja</h1>
        <p className="pengalaman-magang">Dalam perjalanan karier saya sebagai Fullstack Web Developer, saya telah memiliki kesempatan untuk bekerja pada sejumlah proyek yang menggabungkan keahlian teknis dengan solusi estetika. Salah satunya adalah saat saya mendapatkan kepercayaan dari sebuah SMA swasta di Kabupaten Tangerang untuk mengembangkan sebuah website penilaian raport. Proyek tersebut saya kembangkan dengan menggunakan PHP native yang didukung oleh Javascript untuk meningkatkan interaktivitas. Sebagai penunjang tampilan, saya memanfaatkan framework Bootstrap yang memberikan estetika modern dan responsif pada website tersebut.

          Selain itu, saya juga memiliki pengalaman dalam mengembangkan sebuah aplikasi web kasir sederhana. Dengan menggunakan PHP, Javascript, dan MySQL sebagai basis databasenya, saya berhasil menciptakan solusi yang memudahkan proses transaksi dan pengelolaan keuangan. Kedua proyek ini tidak hanya menegaskan keahlian saya dalam pengembangan web, tetapi juga komitmen saya dalam memberikan solusi terbaik yang memenuhi kebutuhan spesifik klien.</p>
        {/* <!-- Gambar Web Magangnya --> */}
        <div className="foto-web">
          <div className="image-web">
            <img className="profile-banner" src={imgSMA} alt="Foto Anda"/>
            <img className="profile-banner" src={imgKasir} alt="Foto Anda"/>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
