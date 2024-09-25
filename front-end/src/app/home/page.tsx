"use client";

import React from 'react';
import { useState } from 'react';
import { FaSearch, FaPlus, FaMinus } from 'react-icons/fa';
import styles from '../style/Home.module.css'; 
import { FaPencilAlt } from "react-icons/fa";
import Header from '../../../components/header/page';
import Footer from '../../../components/footer/page';
import { Tooltip as ReactTooltip } from "react-tooltip";

const Home: React.FC = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
      };
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.buttonContainer}>
        <div>
          <button className={styles.button1} data-tooltip-id="my-tooltip-1">
            <FaPencilAlt size={70} color='white'/>          
          </button>   
          <ReactTooltip
          id="my-tooltip-1"
          place="bottom"
          content="Editar"
          />       
        </div>
        <div> 
        <button className={styles.button2} data-tooltip-id="my-tooltip-2">
          <FaSearch size={70} />
        </button>
        <ReactTooltip
          id="my-tooltip-2"
          place="bottom"
          content="Pesquisar"
          />    
        </div>
        <div>
        <button className={styles.button3} data-tooltip-id="my-tooltip-3">
          <FaPlus size={70} />
        </button>
        <ReactTooltip
          id="my-tooltip-3"
          place="bottom"
          content="Adicionar"
          />       
        </div>
        <div>
        <button className={styles.button4} data-tooltip-id="my-tooltip-4">
          <FaMinus size={70} />
        </button>
        <ReactTooltip
          id="my-tooltip-4"
          place="bottom"
          content="Excluir"
          />       
         </div>
      </div>
      <Footer text='Versão 1.0'/>      
    </div>
  );
};

export default Home;
