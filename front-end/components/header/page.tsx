// components/Header.js
import React, { useState } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { FaRegCircleUser } from 'react-icons/fa6';
import { ImExit } from 'react-icons/im';
import styles from '../../src/app/style/Home.module.css'

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <TiShoppingCart size={70} color="black" />
        Gerenciador de Estoque
      </h1>
      <div className={styles.userInfo}>
        <div onClick={toggleMenu} className={styles.userIcon}>
          <FaRegCircleUser size={20} color="black" style={{ marginRight: '10px' }} />
        </div>
        <span className={styles.userName}>Usuário13231321</span>
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
  );
};

export default Header;
