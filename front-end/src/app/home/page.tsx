"use client";

import React from 'react';
import { useState } from 'react';
import { FaSearch, FaPlus, FaMinus } from 'react-icons/fa';
import styles from '../style/Home.module.css'; 
import { TiShoppingCart } from "react-icons/ti";
import { FaRegCircleUser, FaDiceD6 } from "react-icons/fa6";
import { ImExit } from "react-icons/im";

const Home: React.FC = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
      };
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <TiShoppingCart size={70} color="black"/>
          Gerenciador de Estoque
        </h1>
        <div className={styles.userInfo}>
          <div onClick={toggleMenu} className={styles.userIcon}>
            <FaRegCircleUser size={20} color="black" style={{ marginRight: '10px' }} />
          </div>
          <span className='nome_user'>Usuário13231321</span>
          <ImExit size={20} color="black" style={{ marginLeft: '10px' }} />
        </div>

         {/* Renderizar o menu de opções */}
         {menuVisible && (
          <div className={styles.dropdownMenu}>
            <ul>
              <li>Adicionar usuário</li>
              <li>Excluir usuário</li>
              <li>Sair</li>
            </ul>
          </div>
        )}
      </header>

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

      <footer className={styles.footer}>
        <p className='textFooter'>Versão 1.0.0</p>
      </footer>
    </div>
  );
};

export default Home;
