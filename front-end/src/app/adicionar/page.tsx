'use client';

import Header from '../../../components/header/page';
import Footer from '../../../components/footer/page';
import TabelaProdutos from '../../../components/tabelaProdutos/page';

const AdicionarPage: React.FC = () => {
  return (
    <div className='flex flex-col h-full'>
      <Header />
      <TabelaProdutos titulo='Adicionar Produto' tipo='adicionar' />      
      <Footer text='Versão 1.0'/>
    </div>
  );
};

export default AdicionarPage;
