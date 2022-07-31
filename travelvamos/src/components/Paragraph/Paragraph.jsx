import React, { Component } from 'react';
import "./Paragraph.css"

class Paragraph extends Component {
    render() {
        return (
            <div className='Paragraph'>
               <section className='TextP'>
                <h2> We'll take you wherever you're <strong> meant to go </strong></h2>
                <p> Stop control-freaking your trip. Just sit back, relax and let us arrange everything. Select a specific theme or put together your own city break. Only accommodations rated 8 or higher will make the final and, of course, you<span dangerouslySetInnerHTML={{ __html: "'" }}></span> ll fly with a safe airline. Take the leap and discover your mystery holiday to destination unknown! </p>

                <h5> <span dangerouslySetInnerHTML={{ __html: "`" }}></span> Will the current situation affect my srprs.trip?<span dangerouslySetInnerHTML={{ __html: "'" }}></span>  Find all information you need before taking a srprs.trip on our <a href="/">blog. </a></h5>
               </section>

               <ul className='NavbarList1'>
               <li className='Nav-Items2'> <img className='photo' src="./vliegtuig.png" width={50} height={50}></img> FLIGHT TRIP</li>
               <li className='Nav-Items2'> <img  className='photo' src="./auto.png" width={50} height={50}></img> ROAD TRIP</li>
               <li className='Nav-Items2'> <img  className='photo' src="./racket.png" width={50} height={50}></img> ROCKET TRIP </li>
               </ul>
            </div>
        );
    }
}

export default Paragraph;