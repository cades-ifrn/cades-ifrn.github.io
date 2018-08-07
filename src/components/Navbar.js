import React from 'react'
import Link from 'gatsby-link'

const Navbar = ({isDetail=false}) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${isDetail ? 'navbar-shrink' : ''}`} id="mainNav">
      <div className="container">
        <Link className="navbar-brand js-scroll-trigger" to={isDetail ? '/' : '#page-top' }>
          <img style={{maxWidth: '6rem'}} src="/img/logo.svg" />
        </Link>

        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          {!isDetail 
            ? <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#objetivos">Objetivos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#iniciativas">Iniciativas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#eventos">Eventos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#team">Membros</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">Contato</a>
                </li>
              </ul>
            : <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Voltar</Link>
                </li>
              </ul>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar
