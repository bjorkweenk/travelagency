import React, { Component } from 'react';
import "./Status.css"

class Status extends Component {
    render() {
        return (
            <div className='Status'>
                 <ul className='StatusList'>
                    <li className='Status-Items'> 269,705 <br></br> fans </li>
                    <li className='Status-Items'> 143.951 <br></br> travellers </li>
                    <li className='Status-Items'> 8.9 <br></br> in reviews</li>
                </ul>
            </div>
        );
    }
}

export default Status;