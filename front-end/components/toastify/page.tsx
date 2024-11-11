import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cadastro = () => {
  const handleCadastro = () => {
    const isCadastroSucesso = true; 
    
    if (isCadastroSucesso) {
      toast.success('Cadastro realizado com sucesso!', {
        position: 'top-center', 
        autoClose: 3000, 
        theme: "colored" 
      });
    } else {
      toast.error('Falha ao realizar cadastro. Tente novamente.', {
        position: 'top-center', 
        autoClose: 3000,
        theme: "colored"
      });
    }
  };

  return (
    <div>
      <h2>Cadastro de Usuário</h2>
      <button onClick={handleCadastro}>Cadastrar</button>
      
      <ToastContainer />
    </div>
  );
};

export default Cadastro;
