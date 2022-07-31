import React, { Component } from 'react';
import "./Home.css"

import Brands from "../Brands/Brands";
import Form from "../Form/Form";
import Paragraph from "../Paragraph/Paragraph";
import Status from "../Status/Status";
import ThemesTravel from '../ThemesTravel/ThemesTravel';
import Travelers from "../Travelers/Travelers";
import Process from "../Process/Process";

class Home extends Component {
    render() {
        return (
            <>
        <div>        
            <Form />
            <Status />
            <Paragraph />
            <ThemesTravel />
           <Brands />
           <Process />  
           <Travelers />  
           </div>  
           </>
              )
    }
}

export default Home;