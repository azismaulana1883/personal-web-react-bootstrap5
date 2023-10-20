import { Link } from "react-router-dom"

function Navbar ()
{
    return (
      <>
        <div className="container-fluid">
            <div className="row align-items-center border">
                <div className="col-lg-12 col-sm-12 col-md-12">
                    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="nav-brand" to={"/"}><b>Azis Maulana</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link" to={"/"}>Home</Link>
        <Link className="nav-link" to={"/about"}>About</Link>
        <Link className="nav-link" to={"/portfolio"}>Portfolio</Link>
        <Link className="nav-link" to={"/pengalaman"}>Pengalaman</Link>
        <a className="nav-link" href="#blog">Blog</a>
        <a className="nav-link" href="#kontak">Kontak</a>
      </div>
    </div>
  </div>
</nav>
</div>
            </div>
        </div>
      </>
    )
}

export default Navbar