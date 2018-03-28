import React, { Component } from 'react';
import '../../styles/como.css'

import {Col, Grid, Row} from 'react-material-responsive-grid';
import ComoButton from '../landing/sanma_stepButton';
import FlechaAbajo from '../landing/flecha_abajo'
import {Events, Link, scrollSpy} from 'react-scroll';

export default class SanmaComo extends Component {

  constructor(props) {
    super(props);
    this.title = props.title;
    this.steps = props.steps;
    this.state = {
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  updateDimensions(e) {
      this.setState({
          windowHeight: (window.innerHeight),
          windowWidth: (window.innerWidth)
      });
  }
  componentWillMount () {
      this.updateDimensions();
  }
  componentDidMount () {
      window.addEventListener("resize", this.updateDimensions);
      Events.scrollEvent.register('begin', function(to, element) {
          console.log("begin", arguments);
      });
      Events.scrollEvent.register('end', function(to, element) {
          console.log("end", arguments);
      });
      scrollSpy.update();
  }
  componentWillUnmount () {
      window.removeEventListener("resize", this.updateDimensions);
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
  }

  render() {
      var imgcomoheight = this.state.windowHeight*0.20;
      var imgcomoheightsmall = this.state.windowHeight*0.15;
    return (
      <Grid style={{'margin':0, 'padding':0}}>
          <Col hidden={['xs4', 'xs8', 'sm8']} sm={12} md={12} lg={12} xl={12} style={{'margin':0, 'padding':'100px 0 50px 0'}}>
              <Row style={{'margin':0, 'padding':0}}>
                  <Col className='comotitle' sm={12} md={12} lg={12} xl={12} style={{'margin':0, 'padding':0}}>
                      {this.title}
                  </Col>
              </Row>
              <Row style={{'margin':0, 'padding':'80px 0 0 0'}}></Row>
              <Row style={{'margin':0, 'padding':0}}>
                  <Col sm={1} md={1} lg={1} xl={1} style={{'margin':0, 'padding':0}}></Col>
                  <Col sm={10} md={10} lg={10} xl={10} style={{'margin':0, 'padding':0}}>
                      <Row style={{'margin':0, 'padding':0}}>
                      {this.steps.map((step) =>
                          <Col sm={3} md={3} lg={3} xl={3} key={step.title} style={{'margin':0, 'padding':0}}>
                              <h2>{step.title}</h2>
                              <Row style={{'margin':0, 'padding':'10px 0 0 0'}}></Row>
                              <img src={step.img} alt={step.title} style={{'height':imgcomoheight}}></img>
                              <Row style={{'margin':0, 'padding':'10px 0 0 0'}}></Row>
                              <div style={{'padding':'0 20px 0 20px'}}><p >{step.text}</p></div>
                              <Row style={{'margin':0, 'padding':'10px 0 0 0'}}></Row>
                              <ComoButton buttonName={step.textButton}></ComoButton>
                          </Col>
                      )}
                      </Row>
                  </Col>
                  <Col sm={1} md={1} lg={1} xl={1} style={{'margin':0, 'padding':0}}></Col>
              </Row>
              <Row style={{'margin':0, 'padding':'60px 0 0 0'}}></Row>
              <Row style={{'margin':0, 'padding':0}}>
                  <Col sm={12} md={12} lg={12} xl={12} style={{'margin':0, 'padding':0}}>
                      <Link to={'porque'} spy={true} smooth={true} delay={0} duration={800} offset={0}>
                          <FlechaAbajo color="#ffffff"></FlechaAbajo>
                      </Link>
                  </Col>
              </Row>
          </Col>
          <Col hidden={['xs4', 'sm', 'md', 'lg', 'xl']} xs8={8} sm8={8} style={{'margin':0, 'padding':'50px 0 50px 0'}}>
              <Row style={{'margin':0, 'padding':'100px 0 0 0'}}></Row>
              <Row style={{'margin':0, 'padding':0}}>
                  <Col className='comotitle' xs8={8} sm8={8} style={{'margin':0, 'padding':0}}>
                      {this.title}
                  </Col>
              </Row>
              <Row style={{'margin':0, 'padding':'40px 0 0 0'}}></Row>
              <Row style={{'margin':0, 'padding':0}}>
                  <Col xs8={1} sm8={1} style={{'margin':0, 'padding':0}}></Col>
                  <Col xs8={6} sm8={6} style={{'margin':0, 'padding':0}}>
                      <Row style={{'margin':0, 'padding':0}}>
                      {this.steps.map((step) =>
                          <Col xs8={4} sm8={4} key={step.title} style={{'margin':0, 'padding':'0 0 20px 0'}}>
                              <h2>{step.title}</h2>
                              <Row style={{'margin':0, 'padding':'10px 0 0 0'}}></Row>
                              <img src={step.img} alt={step.title} style={{'height':imgcomoheightsmall}}></img>
                              <Row style={{'margin':0, 'padding':'10px 0 0 0'}}></Row>
                              <div style={{'padding':'0 40px 0 40px'}}><p >{step.text}</p></div>
                              <Row style={{'margin':0, 'padding':'10px 0 0 0'}}></Row>
                              <ComoButton buttonName={step.textButton}></ComoButton>
                          </Col>
                      )}
                      </Row>
                  </Col>
                  <Col xs8={1} sm8={1} style={{'margin':0, 'padding':0}}></Col>
              </Row>
              <Row style={{'margin':0, 'padding':'20px 0 0 0'}}></Row>
              <Row style={{'margin':0, 'padding':0}}>
                  <Col xs8={8} sm8={8} style={{'margin':0, 'padding':0}}>
                      <Link to={'porque'} spy={true} smooth={true} delay={0} duration={800} offset={0}>
                          <FlechaAbajo color="#ffffff"></FlechaAbajo>
                      </Link>
                  </Col>
              </Row>
          </Col>
          <Col hidden={['xs8', 'sm8', 'sm', 'md', 'lg', 'xl']} xs4={4} style={{'margin':0, 'padding':'15px 0 15px 0'}}>
              <Row style={{'margin':0, 'padding':'100px 0 0 0'}}></Row>
              <Row style={{'margin':0, 'padding':0}}>
                  <Col className='comotitle' xs4={4} style={{'margin':0, 'padding':0}}>
                      {this.title}
                  </Col>
              </Row>
              <Row style={{'margin':0, 'padding':'30px 0 0 0'}}></Row>
              <Row style={{'margin':0, 'padding':0}}>
                  <Col xs4={4} style={{'margin':0, 'padding':0}}>
                      <Row style={{'margin':0, 'padding':0}}>
                      {this.steps.map((step) =>
                          <Col xs4={4} key={step.title} style={{'margin':0, 'padding':'0 0 25px 0'}}>
                              <h2>{step.title}</h2>
                              <Row style={{'margin':0, 'padding':'5px 0 0 0'}}></Row>
                              <img src={step.img} alt={step.title} style={{'height':imgcomoheightsmall}}></img>
                              <Row style={{'margin':0, 'padding':'5px 0 0 0'}}></Row>
                              <div style={{'padding':'0 100px 0 100px'}}><p >{step.text}</p></div>
                              <Row style={{'margin':0, 'padding':'5px 0 0 0'}}></Row>
                              <ComoButton buttonName={step.textButton}></ComoButton>
                          </Col>
                      )}
                      </Row>
                  </Col>
              </Row>
              <Row style={{'margin':0, 'padding':'20px 0 0 0'}}></Row>
              <Row style={{'margin':0, 'padding':0}}>
                  <Col xs4={4} style={{'margin':0, 'padding':0}}>
                      <Link to={'porque'} spy={true} smooth={true} delay={0} duration={800} offset={130}>
                          <FlechaAbajo color="#ffffff"></FlechaAbajo>
                      </Link>
                  </Col>
              </Row>
          </Col>
      </Grid>
    );
  }

}
