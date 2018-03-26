import React, { Component } from 'react';
import '../../styles/toolbar.css';

import {Col, Grid, Row} from 'react-material-responsive-grid';
import {Events, Link, scrollSpy} from 'react-scroll';
import LoginIcon from '../landing/iconLogin';
import CartIcon from '../landing/iconCart';


export default class SanmaToolbar extends Component {

    constructor(props) {
        super(props);
        this.logo = props.logo;
        this.elementos = props.elementos;
        this.iconoLogin = props.iconoLogin;
        this.iconoCart = props.iconoCart;
    }
    updateDimensions(e) {
    }
    componentWillMount () {
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
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    render() {
        var toolbarLength = 12/this.elementos.length;
        return (
            <Grid style={{'margin':0, 'padding':'20px 0 20px 0'}} className='toolbarstyle'>
                <Col hidden={['xs4', 'xs8', 'sm8']} sm={12} md={12} lg={12} xl={12} style={{'margin':0, 'padding':0}}>
                    <Row style={{'margin':0, 'padding':0}}>
                        <Col sm={2} md={2} lg={2} xl={2}>
                            <img src={this.logo} alt="SanmaLogo" className='logotoolbar'></img>
                        </Col>
                        <Col sm={8} md={8} lg={8} xl={8}>
                            <Row>
                                {this.elementos.map( elem => (
                                    <Col key={elem.to}
                                        sm={toolbarLength}
                                        md={toolbarLength}
                                        lg={toolbarLength}
                                        xl={toolbarLength}>
                                        <Link to={elem.to} spy={true} smooth={true} delay={0} duration={800} offset={-25}>{elem.title}</Link>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col sm={1} md={1} lg={1} xl={1}>
                            <a href="/login">
                                <LoginIcon></LoginIcon>
                            </a>
                        </Col>
                        <Col sm={1} md={1} lg={1} xl={1}>
                            <a href="/cart">
                                <CartIcon></CartIcon>
                            </a>
                        </Col>
                    </Row>
                </Col>
                <Col hidden={['xs4', 'sm', 'md', 'lg', 'xl']} xs8={8} sm8={12} style={{'margin':0, 'padding':0}}>
                    <Row style={{'margin':0, 'padding':0}}>
                        <Col xs8={2} sm8={2}>
                            <img src={this.logo} alt="SanmaLogo" className='logotoolbar'></img>
                        </Col>
                        <Col xs8={4} sm8={4}>
                            <Link to={"tienda"}
                                spy={true}
                                smooth={true}
                                delay={0}
                                duration={800}
                                offset={-25}>
                                IR A LA TIENDA
                            </Link>
                        </Col>
                        <Col xs8={1} sm8={1}>
                            <a href="/login">
                                <LoginIcon></LoginIcon>
                            </a>
                        </Col>
                        <Col xs8={1} sm8={1}>
                            <a href="/cart">
                                <CartIcon></CartIcon>
                            </a>
                        </Col>
                    </Row>
                </Col>
                <Col hidden={['xs8', 'sm8', 'sm', 'md', 'lg', 'xl']} xs4={4} style={{'margin':0, 'padding':0}}>
                    <Row style={{'margin':0, 'padding':0}}>
                        <Col xs4={1}>
                            <img src={this.logo} alt="SanmaLogo" className='logotoolbar'></img>
                        </Col>
                        <Col xs4={2}>
                            <Link to={"tienda"}
                                spy={true}
                                smooth={true}
                                delay={0}
                                duration={800}
                                offset={-25}>
                                IR A LA TIENDA
                            </Link>
                        </Col>
                        <Col xs4={1}>
                            <span className='lefticon'>
                                <a href="/login">
                                    <LoginIcon></LoginIcon>
                                </a>
                            </span>
                            <span className='rightticon'>
                                <a href="/cart">
                                    <CartIcon></CartIcon>
                                </a>
                            </span>
                        </Col>
                    </Row>
                </Col>


        </Grid>
        );
    }

}
