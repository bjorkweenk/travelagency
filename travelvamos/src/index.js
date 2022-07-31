
import React from 'react';
//import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './App';


// BOOTSTRAP STYLING
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter as Router } from 'react-router-dom'
import ReactBreakpoints from 'react-breakpoints'
 
const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920,
}



ReactDOM.render(
  <ReactBreakpoints breakpoints={breakpoints}>
  <Router>
        <App />  
  </Router>
  </ReactBreakpoints>,
document.getElementById("root")
)