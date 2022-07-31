
import React from 'react';
import './App.css'
import Footer from "../../travelvamos/src/components/Footer/Footer"
import NavBar from "../../travelvamos/src/components/NavBar/NavBar"
import AppRoutes from './routes/AppRoutes';
//import UserMessage from './UserMessage/UserMessage';



const App = () => {
  return (
    <>
      <NavBar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App