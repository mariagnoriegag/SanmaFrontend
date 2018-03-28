import React, { Component } from 'react';
import '../../styles/flecha.css'

export default class FlechaAbajo extends Component {

  constructor(props) {
    super(props);
    this.color = props.color;
  }

  render() {
    return (
        <div className='zindex3 relativeposition movingvertically'>
            <svg width="57px" height="28px" viewBox="0 0 57 28" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="MacBook-Pro-13-in" transform="translate(-616.000000, -738.000000)" fill={this.color}>
                    <path d="M617.296153,740.548174 L617.296153,740.548174 C619.542111,737.740727 623.587418,737.171153 626.52126,739.249291 L639.257289,748.270645 C642.84537,750.812202 647.672637,750.7118 651.151937,748.02325 L662.229457,739.463348 C665.041422,737.290466 669.076194,737.773224 671.296153,740.548174 L671.296153,740.548174 C673.431522,743.217384 672.998757,747.112264 670.329547,749.247633 C670.27484,749.291398 670.219394,749.334231 670.163233,749.376114 L651.49399,763.29894 C648.082425,765.843157 643.434354,765.949417 639.910087,763.56376 L618.598641,749.13755 C615.89465,747.307156 615.18646,743.631311 617.016854,740.92732 C617.104882,740.797279 617.198055,740.670796 617.296153,740.548174 Z" id="Path-3"></path>
                </g>
                </g>
            </svg>
        </div>
    );
  }

}
