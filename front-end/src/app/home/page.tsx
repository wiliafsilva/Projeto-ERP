"use client";

import React from 'react';
import { useState } from 'react';
import { FaSearch, FaPlus, FaMinus } from 'react-icons/fa';
import styles from '../style/Home.module.css'; 
import { FaDiceD6 } from "react-icons/fa6";
import Header from '../../../components/header/page';
import Footer from '../../../components/footer/page';

const Home: React.FC = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
      };
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.buttonContainer}>
        <button className={styles.button1}>
          <FaDiceD6 size={70} color='white' />
        </button>
        <button className={styles.button2}>
          <FaSearch size={70} />
        </button>
        <button className={styles.button3}>
          <FaPlus size={70} />
        </button>
        <button className={styles.button4}>
          <FaMinus size={70} />
        </button>
      </div>
      <Footer/>      
    </div>
  );
};

export default Home;
