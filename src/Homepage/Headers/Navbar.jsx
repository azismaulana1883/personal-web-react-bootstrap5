function Navbar ()
{
    return (
        <div className="container-fluid">
            <div className="row align-items-center border">
                <div className="col-lg-12 col-sm-12 col-md-12">
                    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Azis</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="index.html">Home</a>
        <a className="nav-link" href="pages/about.html">About</a>
        <a className="nav-link" href="pages/portfolio.html">Portfolio</a>
        <a className="nav-link" href="pages/pengalaman.html">Pengalaman</a>
        <a className="nav-link" href="#blog">Blog</a>
        <a className="nav-link" href="#kontak">Kontak</a>
      </div>
    </div>
  </div>
</nav>
</div>
            </div>
        </div>
    )
}

export default Navbar