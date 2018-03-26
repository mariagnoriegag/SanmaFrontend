import React, { Component } from 'react';

import '../../styles/buttonsettings.css'
import {Events, Link, scrollSpy} from 'react-scroll';

export default class PrincipalButton extends Component {

  constructor(props) {
    super(props);
    this.buttonName = props.buttonName;
  }
  updateDimensions(e) {
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
        <div className='sanma-button'>
            <Link to={'tienda'} spy={true} smooth={true} delay={0} duration={800} offset={-25}>
            <div className='buttonsettings'>
                {this.buttonName}
            </div>
            </Link>
        </div>

    );
  }

}
