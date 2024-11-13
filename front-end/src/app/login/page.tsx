"use client";

import { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import styles from "../style/Login.module.css";
import { TiShoppingCart } from "react-icons/ti";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if ((username == 'panimarinho' && password == '12345678') || (username == 'ricardo' && password == '12345678')) {
      router.push('/home');
    } else {
      Swal.fire({
        title: 'Usuário ou senha inválidos!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
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
            <TiShoppingCart size={70} color="white" /> {/* Ícone de carrinho */}
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
              autoComplete="false"
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
              autoComplete="false"
            />
          </div>

          <div className={styles.forgotPassword}>
            <a href="#">Suporte Técnico</a>
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
