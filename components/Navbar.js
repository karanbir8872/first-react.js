const Navbar = () => (
  <section className="section">
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://colorlib.com/preview/theme/medcare/img/logo.png"
              alt="logo"
            />
          </a>
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/" className="navbar-item">
              HOME
            </a>

            <a href="about" className="navbar-item">
              STORE
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">DROPDOWN</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">supplements</a>
                <a className="navbar-item">Vitamins</a>
                <a className="navbar-item">Deit & Nutrition</a>
                <a className="navbar-item">Tea & coffee</a>
              </div>
            </div>
            <a
              href="/company"
              className="navbar-item"
            >
              ABOUT
            </a>
            <a href="/address"
              className="navbar-item"
            >
              CONTACT
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <i className="fas fa-search" />
            </div>
            <div className="navbar-item">
              <i className="fas fa-shopping-bag" />
            </div>
          </div>
          <style JSX>{`
        .navbar-menu{
            margin-left:13rem;
        }
        .navbar-menu a{
          padding-left:1.5rem;
          font-size: 15px;
          font-weight: 500;
        }
        .navbar{
          margin-top: -2rem;
        }       
        `}</style>
        </div>
      </nav>
    </div>
  </section>
);
export default Navbar;
