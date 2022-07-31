import React, { Component } from 'react';
import "./Navbars.css"


class Navbars extends Component {
    render() {
        return (
            <div className='Navbars'>
            <div className='Navbar'>
                <ul className='NavbarList'>
                    <li className='Nav-Items'> <img src="./logo.png" width={50} height={50}></img></li>
                    <li className='Nav-Items'> Trips </li>
                    <li className='Nav-Items'> How it works</li>
                    <li className='Nav-Items'> About us</li>
                    <li className='Nav-Items'> Contact <span dangerouslySetInnerHTML={{ __html: "&" }}></span> Support </li>
                    <li className='Nav-Items'> Gift Card </li>
                    <ul li className='Nav-Items'> <li> NL</li>
                        <li> UK </li>
                        <li> ES</li></ul>
                    <li className='Nav-Items'> <img className="person" src="./person.png" width={40} height={40}/></li>
                    <li li className='Nav-Items'> <button className='Btn'> Book now </button></li>
                </ul>
            </div>
            </div>
        );
    }
}

export default Navbars;