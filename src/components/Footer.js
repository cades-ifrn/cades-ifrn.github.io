import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <span className="copyright">Copyright &copy; CADES | 2018</span>
          </div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="https://github.com/cades-ifrn">
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://facebook.com/groups/1179653102165682">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.youtube.com/channel/UCWPEZj5zCybArs3WrQLQQWA">
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <a href="#">Código de Conduta</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
