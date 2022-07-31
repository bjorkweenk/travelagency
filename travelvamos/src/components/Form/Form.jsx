import React, { Component } from 'react';
import "./Form.css"

class Form extends Component {
    render() {
        return (
            <div className='Form'>
            
                <h1  className='txt'> Your city break to destination unknown </h1>
                <h3  className='txt1'> Make space for the unexpected in your schedule and discover your destination before take-off.</h3>
                
                <ul className='form'> 
                <li className='Nav-Items1'> <img src="./vliegtuig.png" width={30} height={30}></img> How? <br></br> <strong> FLIGHT TRIP</strong></li><div class="vl"></div>
                <li className="Nav-Items1"> <img src="./vliegtuig.png" width={30} height={30}></img> How? <br></br> <strong> FLIGHT TRIP</strong></li><div class="vl"></div>
                <li className="Nav-Items1"> <img src="./vliegtuig.png" width={30} height={30}></img> How? <br></br> <strong> FLIGHT TRIP</strong></li><div class="vl"></div>
                <li className="Nav-Items1"> <button className='btn-trip'> Customise trip </button></li></ul>
            </div>
        );
    }
}

export default Form;