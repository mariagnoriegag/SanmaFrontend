import React, { Component } from 'react';
import '../../styles/home.css'
import BackgroundHome from '../../assets/sanmabackend.png';
import BackgroundHomeMobile from '../../assets/sanmabackendmobile.png'
import SanmaToolbar from './sanma_toolbar';
import PrincipalButton from './sanma_principalbutton';
import {Col, Grid, Row} from 'react-material-responsive-grid';
import {Events, Link, scrollSpy} from 'react-scroll';
import FlechaAbajo from '../landing/flecha_abajo'

export default class SanmaHome extends Component {

    constructor(props) {
        super(props);
        this.logo = props.logo;
        this.elementosToolbar = props.elementosToolbar;
        this.iconoLogin = props.iconoLogin;
        this.iconoCart = props.iconoCart;
        this.imgmodel = props.imgmodel;
        this.text=props.text;
        this.buttonName=props.buttonName;
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
        var verticalposition = this.state.windowHeight - 50;
        var imgmodelheight = this.state.windowHeight*0.80;
        var imgmodelheighttiny = this.state.windowHeight*0.40;
        return (
            <Grid style={{'margin':0, 'padding':0}}>
                <Col className='absoluteposition right0 zindex1' hidden={['xs4']} xs8={8} sm8={8} sm={12} md={12} lg={12} xl={12} style={{'margin':0, 'padding':0}}>
                    <img className='absoluteposition right0 zindex1' src={BackgroundHome} alt='BackgroundHome'></img>
                </Col>
                <Col className='absoluteposition right0 zindex1' hidden={['xs8', 'sm8', 'sm', 'md', 'lg', 'xl']} xs4={4} style={{'margin':0, 'padding':0}}>
                    <img className='absoluteposition right0 zindex1' src={BackgroundHomeMobile} alt='BackgroundHomeMobile'></img>
                </Col>
                <Col hidden={['xs4', 'xs8', 'sm8']} sm={12} md={12} lg={12} xl={12} style={{'margin':0, 'padding':0}}>
                    <div className='relativeposition left0 right0 zindex2'>
                        <SanmaToolbar logo={this.logo}
                            elementos={this.elementosToolbar}
                            iconoLogin={this.iconoLogin}
                            iconoCart={this.iconoCart}>
                        </SanmaToolbar>
                    </div>
                    <Row style={{'margin':0, 'padding':0}} className='relativeposition zindex2'>
                        <Col sm={2} md={2} lg={2} xl={2}></Col>
                        <Col sm={4} md={4} lg={4} xl={4} style={{'margin':0, 'padding':0}}>
                            <img className='imgmodelposition' alt='Modelo' src={this.imgmodel} style={{'height':imgmodelheight}}></img>
                        </Col>
                        <Col sm={4} md={4} lg={4} xl={4} style={{'margin':0, 'padding':0}}>
                            <Row style={{'margin':0, 'padding':0}} className='verticalalign'>
                            {this.text.map((text12) =>
                                <Col sm={12} md={12} lg={12} xl={12} key={text12.id} style={{'margin':0, 'padding':0}}>
                                    <h1 className={text12.css}>{text12.text}</h1>
                                </Col>
                            )}
                            <Col sm={12} md={12} lg={12} xl={12} style={{'margin':0, 'padding':'30px 0 0 0'}} className=''>
                                <PrincipalButton buttonName={this.buttonName}>
                                </PrincipalButton>
                            </Col>
                            </Row>
                        </Col>
                        <Col sm={2} md={2} lg={2} xl={2}></Col>
                    </Row>
                    <Link to={'como'} spy={true} smooth={true} delay={0} duration={800} offset={0}>
                        <FlechaAbajo color="#ffffff"></FlechaAbajo>
                    </Link>
                    <Row style={{'margin':0, 'padding':'0 0 10px 0'}}></Row>
                </Col>
                <Col hidden={['xs4', 'sm', 'md', 'lg', 'xl']} xs8={8} sm8={8} style={{'margin':0, 'padding':0}}>
                    <div className='relativeposition left0 right0 zindex2'>
                        <SanmaToolbar logo={this.logo}
                            elementos={this.elementosToolbar}
                            iconoLogin={this.iconoLogin}
                            iconoCart={this.iconoCart}>
                        </SanmaToolbar>
                    </div>
                    <Row style={{'margin':0, 'padding':0}} className='relativeposition zindex2'>
                        <Col xs8={4} sm8={4} style={{'margin':0, 'padding':0}}>
                            <img className='imgmodelposition' alt='Modelo' src={this.imgmodel} style={{'height':imgmodelheight}}></img>
                        </Col>
                        <Col xs8={4} sm8={4} style={{'margin':0, 'padding':0}}>
                            <Row style={{'margin':0, 'padding':0}} className='verticalalign'>
                            {this.text.map((text12) =>
                                <Col xs8={8} sm8={8} key={text12.id} style={{'margin':0, 'padding':0}}>
                                    <h1 className={text12.css}>{text12.text}</h1>
                                </Col>
                            )}
                            <Col xs8={8} sm8={8} style={{'margin':0, 'padding':'30px 0 0 0'}} className=''>
                                <PrincipalButton buttonName={this.buttonName}>
                                </PrincipalButton>
                            </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Link to={'como'} spy={true} smooth={true} delay={0} duration={800} offset={0}>
                        <FlechaAbajo color="#ffffff"></FlechaAbajo>
                    </Link>
                    <Row style={{'margin':0, 'padding':'0 0 10px 0'}}></Row>
                </Col>
                <Col hidden={['xs8', 'sm8', 'sm', 'md', 'lg', 'xl']} xs4={4} style={{'margin':0, 'padding':0}}>
                    <div className='relativeposition left0 right0 zindex2'>
                        <SanmaToolbar logo={this.logo}
                            elementos={this.elementosToolbar}
                            iconoLogin={this.iconoLogin}
                            iconoCart={this.iconoCart}>
                        </SanmaToolbar>
                    </div>
                    <Row style={{'margin':0, 'padding':0}} className='relativeposition zindex2'>
                        <Col xs4={4} style={{'margin':0, 'padding':0}}>
                            <img className='imgmodelposition' alt='Modelo' src={this.imgmodel} style={{'height':imgmodelheighttiny}}></img>
                        </Col>
                        <Col xs4={4} style={{'margin':0, 'padding':0}}>
                            <Row style={{'margin':0, 'padding':0}} className='verticalalign'>
                            {this.text.map((text12) =>
                                <Col xs4={4} key={text12.id} style={{'margin':0, 'padding':0}}>
                                    <h1 className={text12.css}>{text12.text}</h1>
                                </Col>
                            )}
                            <Col xs4={4} style={{'margin':0, 'padding':'10px 0 0 0'}} className=''>
                                <PrincipalButton buttonName={this.buttonName}>
                                </PrincipalButton>
                            </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{'margin':0, 'padding':'0 0 25px 0'}}></Row>
                    <Link to={'como'} spy={true} smooth={true} delay={0} duration={800} offset={0}>
                        <FlechaAbajo color="#ffffff"></FlechaAbajo>
                    </Link>
                    <Row style={{'margin':0, 'padding':'0 0 10px 0'}}></Row>
                </Col>

            </Grid>
        );
    }

}
