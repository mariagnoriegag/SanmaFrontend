import React, { Component } from 'react';
import '../../styles/porque.css'
import BackgroundComo from '../../assets/proquebackend.png'
import BackgroundComoMovil from '../../assets/proquebackendmovil.png'
import FlechaAbajo from '../landing/flecha_abajo'
import {Events, Link, scrollSpy} from 'react-scroll';
import {Col, Grid, Row} from 'react-material-responsive-grid';

export default class SanmaPorque extends Component {

  constructor(props) {
    super(props);
    this.title = props.title;
    this.mision = props.mision;
    this.caracteristicas = props.caracteristicas;
  }
  componentWillMount () {
  }
  componentDidMount () {
      Events.scrollEvent.register('begin', function(to, element) {
          console.log("begin", arguments);
      });
      Events.scrollEvent.register('end', function(to, element) {
          console.log("end", arguments);
      });
      scrollSpy.update();
  }
  componentWillUnmount () {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <Grid style={{'margin':0, 'padding':0}}>
          <Col className='absoluteposition right0 zindex1 background-position' hidden={['xs4', 'xs8']} sm8={8} sm={12} md={12} lg={12} xl={12} style={{'margin':0, 'padding':0}}>
              <img className='absoluteposition right0 zindex1 background-position' src={BackgroundComo} alt='BackgroundComo'></img>
          </Col>
          <Col className='absoluteposition right0 zindex1' hidden={['sm8', 'sm', 'md', 'lg', 'xl']} xs4={4} xs={8} style={{'margin':0, 'padding':0}}>
              <img className='absoluteposition right0 zindex1' src={BackgroundComoMovil} alt='BackgroundHomeComo'></img>
          </Col>
          <Col hidden={['xs4', 'xs8']} sm8={8} sm={12} md={12} lg={12} xl={12} className='relativeposition zindex2' style={{'margin':0, 'padding':'0px 0 50px 0'}}>
              <Row style={{'margin':0, 'padding':'70px 0 0 0'}}></Row>
              <Row style={{'margin':0, 'padding':0}} >
                  <Col sm8={8} sm={12} md={12} lg={12} xl={12} style={{'margin':0, 'padding':0}}>
                      <h1 className='porquetitle'>{this.title}</h1>
                  </Col>
              </Row>
              <Row style={{'margin':0, 'padding':'50px 0 0 0'}}></Row>
              <Row style={{'margin':0, 'padding':'0 0 0 0'}}>
                  <Col sm8={8} sm={12} md={12} lg={12} xl={12} style={{'margin':0, 'padding':'0'}}>
                      <div className='porquemision'>{this.mision}</div>
                  </Col>
              </Row>
              <Row style={{'margin':0, 'padding':'80px 0 0 0'}}></Row>
              <Row style={{'margin':0, 'padding':'0 0 0 0'}}>
                  {this.caracteristicas.map((caracteristica) =>
                      <Col sm8={8} sm={12} md={12} lg={12} xl={12} key={caracteristica.id} style={{'margin':0, 'padding':0}}>
                          <div className='porque-caracteristicas'>{caracteristica.name}</div>
                      </Col>
                  )}
              </Row>
              <Row style={{'margin':0, 'padding':'15px 0 0 0'}}></Row>
              <Row style={{'margin':0, 'padding':0}}>
                  <Col sm8={8} sm={12} md={12} lg={12} xl={12} style={{'margin':0, 'padding':0}}>
                      <Link to={'tienda'} spy={true} smooth={true} delay={0} duration={800} offset={0}>
                          <FlechaAbajo color="#000000"></FlechaAbajo>
                      </Link>
                  </Col>
              </Row>

          </Col>
          <Col hidden={['sm8', 'sm', 'md', 'lg', 'xl']} xs4={4} xs={8} className='relativeposition zindex2' style={{'margin':0, 'padding':'100px 0 50px 0'}}>
              <Row style={{'margin':0, 'padding':'15px 0 0 0'}}></Row>
              <Row style={{'margin':0, 'padding':0}} >
                  <Col xs4={4} xs={8} style={{'margin':0, 'padding':0}}>
                      <h1 className='porquetitle'>{this.title}</h1>
                  </Col>
              </Row>
              <Row style={{'margin':0, 'padding':'30px 0 0 0'}}></Row>
              <Row style={{'margin':0, 'padding':'0 0 0 0'}}>
                  <Col xs4={4} xs={8} style={{'margin':0, 'padding':'0'}}>
                      <div className='porquemision'>{this.mision}</div>
                  </Col>
              </Row>
              <Row style={{'margin':0, 'padding':'50px 0 0 0'}}></Row>
              <Row style={{'margin':0, 'padding':'0 0 0 0'}}>
                  {this.caracteristicas.map((caracteristica) =>
                      <Col xs4={4} xs={8} key={caracteristica.id} style={{'margin':0, 'padding':0}}>
                          <div className='porque-caracteristicas'>{caracteristica.name}</div>
                      </Col>
                  )}
              </Row>
              <Row style={{'margin':0, 'padding':'0px 0 0 0'}}></Row>
              <Row style={{'margin':0, 'padding':0}}>
                  <Col xs4={4} xs={8} style={{'margin':0, 'padding':0}}>
                      <Link to={'tienda'} spy={true} smooth={true} delay={0} duration={800} offset={0}>
                          <FlechaAbajo color="#000000"></FlechaAbajo>
                      </Link>
                  </Col>
              </Row>
              <Row style={{'margin':0, 'padding':'60px 0 0 0'}}></Row>
          </Col>
      </Grid>
    );
  }

}
