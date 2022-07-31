
import React from 'react';
//import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './App';


// BOOTSTRAP STYLING
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter as Router } from 'react-router-dom'



ReactDOM.render(
  <Router>
 
        <App />
     
  </Router>,
document.getElementById("root")
)