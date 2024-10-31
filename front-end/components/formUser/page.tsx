// components/UserForm.tsx
import React, { useState } from 'react';
import styles from '../../src/app/style/Home.module.css';

interface UserFormProps {
  onClose: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, email, password });
    onClose(); // Fecha o formulário após o envio.
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>Adicionar Usuário</h2>
        <div>
          <label>Nome:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Cadastrar</button>
        <button type="button" onClick={onClose}>Cancelar</button>
      </form>
    </div>
  );
};

export default UserForm;
