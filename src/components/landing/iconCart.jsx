import React, { Component } from 'react';
import '../../styles/iconLogin.css'

export default class CartIcon extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <svg width="20px" height="20px" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="MacBook-Pro-13-in" transform="translate(-1209.000000, -40.000000)" fill="#FFFFFF" fill-rule="nonzero">
                    <g className="carticon" transform="translate(1209.000000, 40.000000)">
                        <path d="M7.5,20 C6.125,20 5,21.125 5,22.5 C5,23.875 6.125,25 7.5,25 C8.875,25 10,23.875 10,22.5 C10,21.125 8.875,20 7.5,20 Z M0,0 L0,2.5 L2.5,2.5 L7,12 L5.25,15 C5.125,15.375 5,15.875 5,16.25 C5,17.625 6.125,18.75 7.5,18.75 L22.5,18.75 L22.5,16.25 L8,16.25 C7.875,16.25 7.75,16.125 7.75,16 L7.75,15.874951 L8.875,13.749951 L18.125,13.749951 C19.125,13.749951 19.875,13.249951 20.25,12.499951 L24.75,4.375 C25,4.125 25,4 25,3.75 C25,3 24.5,2.5 23.75,2.5 L5.25,2.5 L4.125,0 L0,0 Z M20,20 C18.625,20 17.5,21.125 17.5,22.5 C17.5,23.875 18.625,25 20,25 C21.375,25 22.5,23.875 22.5,22.5 C22.5,21.125 21.375,20 20,20 Z" id="Shape"></path>
                    </g>
                </g>
            </g>
        </svg>
    );
  }

}
