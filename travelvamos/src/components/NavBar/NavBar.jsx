import React, { Component } from 'react';
import "./NavBar.css"
import {Media} from 'react-breakpoints'
import Navbars from '../Navbars/Navbars';

class NavBar extends Component {
    render() {
        return (
            <Media>
            {({ breakpoints, currentBreakpoint }) =>
              breakpoints[currentBreakpoint] > breakpoints.desktop ? (
                <Navbars /> 
              ) : (
                <Navbars /> 
              )
            }
          </Media>
        )
      }
    }

export default NavBar;