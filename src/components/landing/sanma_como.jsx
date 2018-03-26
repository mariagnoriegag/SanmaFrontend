import React, { Component } from 'react';
import '../../styles/como.css'

import {Col, Grid, Row} from 'react-material-responsive-grid';
import ComoButton from '../landing/sanma_stepButton'

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
  }
  componentWillUnmount () {
      window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
      var imgcomoheight = this.state.windowHeight*0.20;
      var imgcomoheighttiny = this.state.windowHeight*0.10;
    return (
      <Grid style={{'margin':0, 'padding':0}}>
          <Col hidden={['xs4', 'xs8', 'sm8']} sm={12} md={12} lg={12} xl={12} style={{'margin':0, 'padding':0}}>
              <Row style={{'margin':0, 'padding':'100px 0 0 0'}}></Row>
              <Row style={{'margin':0, 'padding':0}}>
                  <Col className='comotitle' sm={12} md={12} lg={12} xl={12} style={{'margin':0, 'padding':0}}>
                      {this.title}
                  </Col>
              </Row>
              <Row style={{'margin':0, 'padding':'100px 0 0 0'}}></Row>
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
          </Col>
          <Col hidden={['xs4', 'sm', 'md', 'lg', 'xl']} xs8={8} sm8={8} style={{'margin':0, 'padding':0}}>
              <Row style={{'margin':0, 'padding':'100px 0 0 0'}}></Row>
              <Row style={{'margin':0, 'padding':0}}>
                  <Col className='comotitle' xs8={8} sm8={8} style={{'margin':0, 'padding':0}}>
                      {this.title}
                  </Col>
              </Row>
              <Row style={{'margin':0, 'padding':'100px 0 0 0'}}></Row>
              <Row style={{'margin':0, 'padding':0}}>
                  <Col xs8={1} sm8={1} style={{'margin':0, 'padding':0}}></Col>
                  <Col xs8={6} sm8={6} style={{'margin':0, 'padding':0}}>
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
          </Col>
          <Col hidden={['xs8', 'sm8', 'sm', 'md', 'lg', 'xl']} xs4={4} style={{'margin':0, 'padding':0}}>
          </Col>
      </Grid>
    );
  }

}
