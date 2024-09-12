// components/Footer.js
import React from 'react';
import styles from '../../src/app/style/Home.module.css'

interface FooterProps {
  text: string
}

const Footer = ({text}: FooterProps) => {
  return (
    <footer className={styles.footer}>
    <p className='textFooter'>{text}</p>
  </footer>
  );
};

export default Footer;
