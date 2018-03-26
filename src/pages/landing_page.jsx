import React, { Component } from 'react';

import '../styles/landing.css'

import logo from '../assets/sanmaicon.svg';
import logodark from '../assets/sanmalogodark.svg';
import login from '../assets/loginicon.svg';
import cart from '../assets/carticon.svg';
import chica from '../assets/chica.png'
import imgStep1 from '../assets/img-step-1.png'
import imgStep2 from '../assets/img-step-2.png'
import imgStep3 from '../assets/img-step-3.png'
import imgStep4 from '../assets/img-step-4.png'

import SanmaHome from '../components/landing/sanma_home';
import SanmaComo from '../components/landing/sanma_como'
import SanmaFooter from '../components/landing/sanma_footer';

class SanmaLanding extends Component {

  constructor(props) {
    super(props);

    this.sanma_elementos = [
        {title: "BOTELLAS", href: '#blusas', to: 'botellas'},
        {title: "VESTIDOS", href: '#vestidos', to: 'vestidos'},
        {title: "PANTALONES", href: '#pantalones', to: 'pantalones'},
        {title: "FALDAS", href: '#faldas', to: 'faldas'}
    ]
    this.sanma_text = [
        {text: "Olvídate de que no te quede", id: "text1", css: "font1"},
        {text: "Deja que la ropa siga tu figura", id: "text2", css: "font2"}
    ]
    this.sanma_buttontext = "Ir a la tienda";
    this.sanma_steps = [
        {title: "Ubica tu prenda", img: imgStep1, text: "Elige la prenda que más te guste: blusas, vestidos, pantalones y más.", textButton: "Ir a la tienda"},
        {title: "Personalízala", img: imgStep2, text: "Escoge uno de los tejidos disponibles y añade tus iniciales (opcional).", textButton: "Mira los tejidos"},
        {title: "Toma tus medidas", img: imgStep3, text: "Tómate medidas y llena con ellas los campos correspondientes.", textButton: "Mira cómo hacerlo"},
        {title: "Paga y espera", img: imgStep4, text: "Elige el método de pago, danos tu ubicación y en 15 días tu pedido llegará.", textButton: "Mira cómo hacerlo"},
    ]

    this.footer_descripcion = "Nos preocupamos por cada fase del proceso, desde el diseño hasta la entrega del producto para que recibas lo mejor.";
    this.footer_secciones = [
        {title: "Volver a inicio", href: '#sanma', to: 'sanma'},
        {title: "Cómo funciona", href: '#como', to: 'como'},
        {title: "Porqué a medida", href: '#porque', to: 'porque'}
    ]
    this.footer_correo = "hola@sanma.com.pe";
    let date = new Date();
    this.year = date.getFullYear();
  }

  render() {
    return (
      <div>
          <div id="sanma">
              <SanmaHome logo={logo}
                  elementosToolbar={this.sanma_elementos}
                  iconoLogin={login}
                  iconoCart={cart}
                  imgmodel={chica}
                  text={this.sanma_text}
                  buttonName={this.sanma_buttontext} >
              </SanmaHome>
          </div>
          <div id="como" style={{'position':'relative', 'top':0, 'left':0, 'right':0, 'z-index':4}}>
              <SanmaComo title="Cómo funciona"
                  steps={this.sanma_steps} >
              </SanmaComo>
          </div>
          <div id="porque" style={{'position':'relative', 'height':'700px', 'top':0, 'left':0, 'right':0, 'z-index':4}}>
              PORQUE
          </div>
          <div id="tienda">
              TIENDA
              <div id="blusas"></div>
              <div id="vestidos"></div>
              <div id="pantalones"></div>
              <div id="faldas"></div>
          </div>
          <SanmaFooter logo={logodark}
              descripcion={this.footer_descripcion}
              secciones={this.footer_secciones}
              correo={this.footer_correo}>
          </SanmaFooter>
          <div className='derechosreservados'>
              © {this.year} SANMA, Inc. Todos los derechos reservados.
          </div>
      </div>
    );
  }

}

export default SanmaLanding;
