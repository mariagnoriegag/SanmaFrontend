import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../styles/tienda.css'
import FlechaDerecha from '../../assets/arrow_right.svg'
import FlechaIzquierda from '../../assets/arrow_left.svg'
import {Col, Grid, Row} from 'react-material-responsive-grid';
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import Blusa1 from '../../assets/blusa-1.png'
import Blusa2 from '../../assets/blusa-2.png'
import Blusa3 from  '../../assets/blusa-3.png'
import Vestido1 from '../../assets/vestidos-1.png'
import Vestido2 from '../../assets/vestidos-2.png'
import Vestido3 from '../../assets/vestidos-3.png'
import Pantalon1 from '../../assets/pantalones-1.png'
import Pantalon2 from '../../assets/pantalones-2.png'
import Pantalon3 from '../../assets/pantalones-3.png'
import Falda1 from '../../assets/faldas-1.png'
import Falda2 from '../../assets/faldas-2.png'
import Falda3 from '../../assets/faldas-3.png'

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{display: 'block', 'content':`url(${FlechaDerecha})`, 'background-repeat': 'no-repeat', 'background-position':'left center', 'height':'30%', 'width':'40px', 'right':'-50px'}}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{display: 'block', 'content':`url(${FlechaIzquierda})`, 'background-repeat': 'no-repeat', 'background-position':'right center', 'height':'30%', 'width':'40px', 'left':'-50px'}}
      onClick={onClick}
    ></div>
  );
}

class CustomImages extends Component {
  render() {
    const {image, index, ...props} = this.props;
    return (
      <div {...props}>
          <div style={{'height':200, 'margin':'0 10px 0 10px', 'text-align': 'center', 'width': '100%'}}>
              <img src={image} alt={image} style={{'margin-left': 'auto', 'margin-right': 'auto', 'display': 'block'}}></img>
          </div>
      </div>
    )
  }
}

export default class SanmaTienda extends Component {

    constructor(props) {
        super(props);
        this.title = props.title;
        this.blusas = [
            {id: "blusa1", img: Blusa1},
            {title: "blusa2", img: Blusa2},
            {title: "blusa3", img: Blusa3},
        ]
        this.vestidos = [
            {id: "vestido1", img: Vestido1},
            {title: "vestido2", img: Vestido2},
            {title: "vestido3", img: Vestido3},
        ]
        this.pantalones = [
            {id: "pantalon1", img: Pantalon1},
            {title: "pantalon2", img: Pantalon2},
            {title: "pantalon3", img: Pantalon3},
        ]
        this.faldas = [
            {id: "falda1", img: Falda1},
            {title: "falda2", img: Falda2},
            {title: "falda3", img: Falda3},
        ]
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>,
            responsive: [{
                breakpoint: 879,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]

        };
        return (
            <Grid style={{'margin':'0 20% 0 20%', 'padding':0}}>
                <Col hidden={['xs4', 'xs8', 'sm8']} sm={12} md={12} lg={12} xl={12} style={{'margin':0, 'padding':'50px 0 0 0'}}></Col>
                <div id="blusas">
                    <Row style={{'margin':0, 'padding':'0 0 0 0'}}>
                        <h2 style={{'color':'white'}}> BLUSAS</h2>
                    </Row>
                    <Slider {...settings}>
                        {this.blusas.map((blusa) =>
                            <CustomImages index={1} image={blusa.img} />
                        )}
                        {this.blusas.map((blusa) =>
                            <CustomImages index={1} image={blusa.img} />
                        )}
                    </Slider>
                </div>
                <Row style={{'margin':0, 'padding':'50px 0 0 0'}}></Row>
                <div id="vestidos">
                    <Row style={{'margin':0, 'padding':'0 0 0 0'}}>
                        <h2 style={{'color':'white'}}> VESTIDOS </h2>
                    </Row>
                    <Slider {...settings}>
                        {this.vestidos.map((vestido) =>
                            <CustomImages index={1} image={vestido.img} />
                        )}
                        {this.vestidos.map((vestido) =>
                            <CustomImages index={1} image={vestido.img} />
                        )}
                    </Slider>
                </div>
                <Row style={{'margin':0, 'padding':'50px 0 0 0'}}></Row>
                <div id="pantalones">
                    <Row style={{'margin':0, 'padding':'0 0 0 0'}}>
                        <h2 style={{'color':'white'}}> PANTALONES </h2>
                    </Row>
                    <Slider {...settings}>
                        {this.pantalones.map((pantalon) =>
                            <CustomImages index={1} image={pantalon.img} />
                        )}
                        {this.pantalones.map((pantalon) =>
                            <CustomImages index={1} image={pantalon.img} />
                        )}
                    </Slider>
                </div>
                <Row style={{'margin':0, 'padding':'50px 0 0 0'}}></Row>
                <div id="faldas">
                    <Row style={{'margin':0, 'padding':'0 0 0 0'}}>
                        <h2 style={{'color':'white'}}> FALDAS </h2>
                    </Row>
                    <Slider {...settings}>
                        {this.faldas.map((falda) =>
                            <CustomImages index={1} image={falda.img} />
                        )}
                        {this.faldas.map((falda) =>
                            <CustomImages index={1} image={falda.img} />
                        )}
                    </Slider>
                </div>
                <Row style={{'margin':0, 'padding':'50px 0 0 0'}}></Row>
            </Grid>

        );
    }
}
