'use client';

import React from "react";
import Header from "../../../components/header/page";
import Footer from "../../../components/footer/page";
import "../globals.css"

const HomePage = () => {
    return (
      <div>
        <Header /> 
        <div className="teste">
          <h1>Coloque os dados aqui</h1>
        </div>
        <Footer/>       
      </div>
    );
};

export default HomePage;
