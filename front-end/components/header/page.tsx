// components/Header.tsx
import React, { useState } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { FaRegCircleUser } from 'react-icons/fa6';
import { ImExit } from 'react-icons/im';
import UserForm from '../formUser/page';
import styles from '../../src/app/style/Home.module.css';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleHomeClick = () => {
    router.push('/home');
  };

  const handleExitClick = () => {
    router.push('/login');
  };

  const handleAddUserClick = () => {
    setFormVisible(true);
    setMenuVisible(false);
  };

  const closeForm = () => {
    setFormVisible(false);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <div onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
          <TiShoppingCart size={70} color="black" />
        </div>
        Gerenciador de Estoque
      </h1>
      <div className={styles.userInfo}>
        <div onClick={toggleMenu} style={{ cursor: 'pointer' }} className={styles.userIcon}>
          <FaRegCircleUser size={20} color="black" />
        </div>
        <span className={styles.userName}>Usuário13231321</span>
        <div onClick={handleExitClick} style={{ cursor: 'pointer' }}>
          <ImExit size={20} color="black" />
        </div>
      </div>

      {menuVisible && (
        <div className={styles.dropdownMenu}>
          <ul>
            <li onClick={handleAddUserClick}>Adicionar usuário</li>
            <li>Excluir usuário</li>
          </ul>
        </div>
      )}

      {formVisible && <UserForm onClose={closeForm} />}
    </header>
  );
};

export default Header;
