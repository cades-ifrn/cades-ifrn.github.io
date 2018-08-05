import React from 'react'

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Contato</h2>
            <h3 className="section-subheading text-muted">Entre em contato conosco</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form method="post" id="contactForm" name="sentMessage" noValidate="novalidate" action="https://formspree.io/cades.ifrn@gmail.com">
              <input type="hidden" name="_subject" value="Nova mensagem de contato" />
              <input type="hidden" name="_language" value="pt-BR" />
              <input type="hidden" name="_format" value="plain" />
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input className="form-control" id="name" name="name" type="text" placeholder="Seu Nome *" required="required" data-validation-required-message="Por favor digite seu nome."/>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="email" name="_replyto" type="email" placeholder="Seu Email *" required="required" data-validation-required-message="Por favor digite seu email."/>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="phone" name="phone" type="tel" placeholder="Seu Telefone *" required="required" data-validation-required-message="Por favor digite seu telefone."/>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea className="form-control" id="message" name="message" placeholder="Sua Mensagem *" required="required" data-validation-required-message="Por favor digite sua mensagem."></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
                  <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" name="send" type="submit">Enviar Mensagem</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}

export default ContactSection
