"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../style/Login.module.css";
import { TiShoppingCart } from "react-icons/ti";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticação(Falta definir logica de autenticação)
    console.log("Usuário:", username, "Senha:", password);
  };

  return (
    <div className={styles.container}>
      {/* Seção da imagem à esquerda */}
      <div className={styles.imageContainer}>
        <Image
          src="/images/background2.jpg" 
          alt="Estoque"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Seção de login à direita */}
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <div className={styles.title}>
            <TiShoppingCart size={70} color="black" /> {/* Ícone de carrinho */}
            <span className={styles.titleText}>Gerenciador De Estoque</span>
          </div>
          <h2 className={styles.login}>Login</h2>
          <p className={styles.message}>Digite os seus dados de acesso no campo abaixo.</p>
        </div>

        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Usuário</label>
            <input
              id="username"
              type="text"
              placeholder="Digite seu usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.forgotPassword}>
            <a href="#">Esqueci minha senha</a>
          </div>

          <button type="submit" className={styles.submitButton}>
            Acessar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
