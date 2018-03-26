import React, { Component } from 'react';
import '../../styles/footer.css';
import {Col, Grid, Row} from 'react-material-responsive-grid';
import {Events, Link, scrollSpy} from 'react-scroll';

export default class SanmaFooter extends Component {

    constructor(props) {
        super(props);
        this.logo = props.logo;
        this.descripcion = props.descripcion;
        this.secciones = props.secciones;
        this.correo = props.correo;
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
        return (
            <Grid className='sanmafooter font' style={{'margin':0, 'padding':0}}>
                <Col hidden={['xs4', 'xs8', 'sm8']} sm={12} md={12} lg={12} xl={12} style={{'margin':0, 'padding':0}}>
                    <Row style={{'margin':0, 'padding':0}}>
                        <Col sm={1} md={1} lg={1} xl={1} className='footercol3 paddingtopbottom'></Col>
                        <Col sm={3} md={3} lg={3} xl={3} className='footercol1 paddingtopbottom'>
                            <div className='sanmadescripcion'>
                                <img src={this.logo} alt="SanmaLogoDark" className='logofooter'/>
                                <p>{this.descripcion}</p>
                            </div>
                        </Col>
                        <Col sm={4} md={4} lg={4} xl={4} className='footercol2 paddingtopbottom'>
                            <Row className='verticalalign'>
                                {this.secciones.map((seccion) =>
                                    <Col key={seccion.to} sm={12} md={12} lg={12} xl={12} className='seccionestitles'>
                                        <Link to={seccion.to} spy={true} smooth={true} delay={0} duration={800} offset={0}>{seccion.title}</Link>
                                    </Col>
                                )}
                            </Row>
                        </Col>
                        <Col sm={3} md={3} lg={3} xl={3} className='footercol3 paddingtopbottom'>
                            <Row className='verticalalign'>
                                <Col sm={12} md={12} lg={12} xl={12} className='footercorreo'> Preguntas y sugerencias a: </Col>
                                <Col sm={12} md={12} lg={12} xl={12} className='footercorreo'> {this.correo} </Col>
                            </Row>
                        </Col>
                        <Col sm={1} md={1} lg={1} xl={1} className='footercol1 paddingtopbottom'></Col>
                    </Row>
                </Col>
                <Col hidden={['sm', 'md', 'lg', 'xl']} xs4={4} xs8={8} sm8={12} style={{'margin':0, 'padding':0}}>
                    <Row style={{'margin':0, 'padding':0}}>
                        <Col xs4={4} xs8={8} sm8={4} className='footercol1 paddingtopbottom-mobile horizontalalign'>
                            <div className='sanmadescripcion'>
                                <img src={this.logo} alt="SanmaLogoDark" className='logofooter'></img>
                                <p>{this.descripcion}</p>
                            </div>
                        </Col>
                        <Col xs4={4} xs8={8} sm8={4} className='footercol2 paddingtopbottom-mobile horizontalalign '>
                            <div className='col2descripcion'>
                                {this.secciones.map((seccion) =>
                                    <Col key={seccion.to} xs4={4} xs8={8} sm8={8} className='seccionestitles'>
                                        <Link to={seccion.to} spy={true} smooth={true} delay={0} duration={800} offset={0}>{seccion.title}</Link>
                                    </Col>
                                )}
                            </div>
                        </Col>
                    </Row>
                    <Row style={{'margin':0, 'padding':0}}>
                        <Col xs4={4} xs8={8} sm8={8} className='footercol3 paddingtopbottom-mobile horizontalalign'>
                            <Col xs4={4} xs8={8} sm8={8} className='footercorreo'> Preguntas y sugerencias a: </Col>
                            <Col xs4={4} xs8={8} sm8={8} className='footercorreo'> {this.correo} </Col>
                        </Col>
                    </Row>
                </Col>
            </Grid>
        );
    }

}
