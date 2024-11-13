'use client';

import React from 'react';
import Header from '../../../components/header/page';
import Footer from '../../../components/footer/page';
import TabelaProdutos from '../../../components/tableProdutos/page';


const RemoverPage: React.FC = () => {
  return (
    <div className='flex flex-col h-full'>
      <Header />
      <TabelaProdutos titulo='Remover Produto' tipo='remover' />
      <Footer text='Versão 1.0'/>
    </div>
  );
};

export default RemoverPage;
