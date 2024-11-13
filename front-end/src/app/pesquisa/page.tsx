'use client';

import Header from '../../../components/header/page';
import Footer from '../../../components/footer/page';
import TabelaProdutos from '../../../components/tabelaProdutos/page';


const EstoquePage: React.FC = () => {
  return (
    <div className='flex flex-col h-full'>
      <Header />
      <TabelaProdutos tipo='listar' />      
      <Footer text='Versão 1.0'/>
    </div>
  );
};

export default EstoquePage;
