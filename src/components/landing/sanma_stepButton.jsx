import React, { Component } from 'react';
import '../../styles/comoButton.css';
import {Events, Link, scrollSpy} from 'react-scroll';


export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.buttonName = props.buttonName;
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
        <div className='sanma-comobutton'>
            <Link to={'tienda'} spy={true} smooth={true} delay={0} duration={800} offset={-25}>
            <div className='buttoncomosettings'>
                {this.buttonName}
            </div>
            </Link>
        </div>
    );
  }

}
