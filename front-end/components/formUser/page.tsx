// components/UserForm.tsx
import axios from 'axios';
import React, { useState } from 'react';
import styles from '../../src/app/style/Home.module.css';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

interface UserFormProps {
  onClose: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);  // Estado para controlar a submissão

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true); // Inicia a submissão do formulário

    axios
      .post('http://localhost:8080/user/signup', {
        username: username,
        email: email,
        password: password
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json;charset=UTF-8',
        }
      })
      .then((response) => {
        if (response.status === 201) {
          // Mostrar toast de sucesso
          toast.success('Usuário cadastrado com sucesso!', {
            position: 'top-center',
            autoClose: 3000,
            theme: 'colored',
            style: {
              backgroundColor: '#12A150',  
              color: '#fff',  
            },
          });

          setTimeout(() => {
            onClose();  // Fecha o formulário após 3 segundos
            setIsSubmitting(false);  // Libera o envio novamente
          }, 3000);
        } else {
          // Mostrar toast de erro
          toast.error('Por favor, preencha todos os campos!', {
            position: 'top-center',
            autoClose: 3000,
            theme: 'colored',
            style: {
              backgroundColor: '#dc3545',  
              color: '#fff',  
            },
          });
          setIsSubmitting(false);  // Libera o envio novamente
        }
      })
      
      .catch((error) => {
        // Caso haja erro na requisição
        toast.error('Erro ao cadastrar usuário. Tente novamente!', {
          position: 'top-center',
          autoClose: 3000,
          theme: 'colored',
          style: {
            backgroundColor: '#dc3545',  
            color: '#fff',  
          },
        });
        setIsSubmitting(false);  // Libera o envio novamente
      });
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>Adicionar Usuário</h2>
        <div>
          <label>Nome:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" disabled={isSubmitting}> {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}</button>
        <button type="button" onClick={onClose}>Cancelar</button>
      </form>
      <ToastContainer
        newestOnTop={true}
        closeOnClick={true}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
    </div>
  );
};

export default UserForm;
