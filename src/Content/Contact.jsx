import imgMail from '../assets/img/gmail.jpg'
import imgLinked from '../assets/img/linkedin.png'
import imgWA from '../assets/img/whatsapp.jpg'

function Contact ()
{
    return (
<div className="kontak section" id="kontak">
  <h1>Hubungi Saya</h1>
  <p>Anda dapat menghubungi saya melalui:</p>
  <div className="kontak-info">
      <a href="mailto:azis.maulana1883@gmail.com" className="kontak-item">
          <img src={imgMail} alt="Email"/>
          <span>Email: azis.maulana1883@gmail.com</span>
      </a>
      <a href="https://www.linkedin.com/in/azis-maulana-9b6501156/" target="_blank" className="kontak-item">
          <img src={imgLinked} alt="LinkedIn"/>
          <span>LinkedIn: Azis Maulana</span>
      </a>
      <a href="https://wa.me/+6285155337432" className="kontak-item">
          <img src={imgWA} alt="Telepon"/>
          <span>Telepon: 0851-5533-7432</span>
      </a>
  </div>
</div>
    )
}

export default Contact