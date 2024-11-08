'use client';
import React, { useState, useEffect } from 'react';
import Header from '../../../components/header/page';
import Footer from '../../../components/footer/page';
import styles from '../style/Pesquisa.module.css';
import ProdutosIniciais, { Produto } from '../../../components/produtos/page';

const parseDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split('/').map(Number);
  return new Date(year, month - 1, day);
};

const normalizar = (texto: string): string => {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

const EstoquePage: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>(ProdutosIniciais);
  const [filtro, setFiltro] = useState<string>('todos');
  const [pesquisa, setPesquisa] = useState<string>('');
  const [ordem, setOrdem] = useState<string>('codigo');
  const [direcaoOrdem, setDirecaoOrdem] = useState<'asc' | 'desc'>('asc');
  const [paginaAtual, setPaginaAtual] = useState<number>(1);
  const [itensPorPagina] = useState<number>(10);

  useEffect(() => {
    setProdutos(ProdutosIniciais);
  }, []);

  const filtrarProdutos = () => {
    const dataServidor = new Date();

    const produtosComStatusAtualizado = produtos.map(produto => {
      const validade = parseDate(produto.validade);
      const diasRestantes = Math.ceil((validade.getTime() - dataServidor.getTime()) / (1000 * 60 * 60 * 24));

      let status: string;
      let corValidade: string;
      if (validade < dataServidor) {
        status = 'vencido';
        corValidade = 'red'; 
      } else if (diasRestantes <= 10) {
        status = 'aVencer';
        corValidade = 'orange'; 
      } else {
        status = 'valido';
        corValidade = 'green'; 
      }

      return { ...produto, status, corValidade };
    });

    const produtosFiltrados = produtosComStatusAtualizado.filter(produto => {
      switch (filtro) {
        case 'todos':
          return true;
        case 'vencidos':
          return produto.status === 'vencido';
        case 'aVencer':
          return produto.status === 'aVencer';
        case 'comEstoque':
          return produto.quantidade > 0;
        case 'zerado':
          return produto.quantidade === 0;
        default:
          return false;
      }
    });

    const produtosPesquisados = produtosFiltrados.filter(produto =>
      normalizar(produto.descricao).includes(normalizar(pesquisa)) ||
      produto.codigo.toString().includes(pesquisa)
    );

    const produtosOrdenados = produtosPesquisados.sort((a, b) => {
      const campoA = a[ordem as keyof Produto];
      const campoB = b[ordem as keyof Produto];

      if (ordem === 'validade') {
        const dataA = parseDate(campoA as string);
        const dataB = parseDate(campoB as string);
        return direcaoOrdem === 'asc' ? dataA.getTime() - dataB.getTime() : dataB.getTime() - dataA.getTime();
      }

      if (ordem === 'compra') {
        const dataA = parseDate(campoA as string);
        const dataB = parseDate(campoB as string);
        return direcaoOrdem === 'asc' ? dataA.getTime() - dataB.getTime() : dataB.getTime() - dataA.getTime();
      }

      if (typeof campoA === 'string' && typeof campoB === 'string') {
        return direcaoOrdem === 'asc' ? campoA.localeCompare(campoB) : campoB.localeCompare(campoA);
      } else if (typeof campoA === 'number' && typeof campoB === 'number') {
        return direcaoOrdem === 'asc' ? campoA - campoB : campoB - campoA;
      }
      return 0;
    });

    return produtosOrdenados;
  };

  const produtosPaginated = filtrarProdutos().slice(
    (paginaAtual - 1) * itensPorPagina,
    paginaAtual * itensPorPagina
  );

  const totalDePaginas = Math.ceil(filtrarProdutos().length / itensPorPagina);

  const ordenarPor = (campo: string) => {
    if (ordem === campo) {
      setDirecaoOrdem(direcaoOrdem === 'asc' ? 'desc' : 'asc');
    } else {
      setOrdem(campo);
      setDirecaoOrdem('asc');
    }
  };

  const irParaPagina = (pagina: number) => {
    if (pagina >= 1 && pagina <= totalDePaginas) {
      setPaginaAtual(pagina);
    }
  };

  return (
    <div className='flex flex-col h-full'>
      <Header />
      <div className={styles.container}>
        <div className={styles.pesquisa}>
          <span className={styles.label}>Pesquisar:</span>
          <input
            type="text"
            className={styles.inputPesquisa}
            placeholder="Nome do Produto ou Código"
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
          />
        </div>

        <div className={styles.botoes}>
          <button className={`${styles.botao} ${styles.btnTodos}`} onClick={() => setFiltro('todos')}>
            Todos
          </button>
          <button className={`${styles.botao} ${styles.btnVencidos}`} onClick={() => setFiltro('vencidos')}>
            Vencidos
          </button>
          <button className={`${styles.botao} ${styles.btnAVencer}`} onClick={() => setFiltro('aVencer')}>
            A Vencer
          </button>
          <button className={`${styles.botao} ${styles.btnComEstoque}`} onClick={() => setFiltro('comEstoque')}>
            Com Estoque
          </button>
          <button className={`${styles.botao} ${styles.btnZerados}`} onClick={() => setFiltro('zerado')}>
            Zerados
          </button>
          <button className={`${styles.botao2} ${styles.btnEspecial}`} onClick={() => alert('Gerar Relatório')}>
            Imprimir
          </button>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th onClick={() => ordenarPor('codigo')}>Código</th>
                <th onClick={() => ordenarPor('descricao')}>Descrição</th>
                <th onClick={() => ordenarPor('compra')}>Data de Compra</th>
                <th onClick={() => ordenarPor('validade')}>Validade</th>
                <th onClick={() => ordenarPor('quantidade')}>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {produtosPaginated.map((produto) => (
                <tr key={produto.codigo} data-status={produto.status}>
                  <td>
                    <div style={{ 
                      width: '2px', 
                      height: '22px', 
                      backgroundColor: produto.corValidade, 
                      display: 'inline-block', 
                      marginRight: '10px', 
                      borderRadius: '20px' 
                    }}></div>
                    {produto.codigo}
                  </td>
                  <td>{produto.descricao}</td>
                  <td>{produto.compra}</td>
                  <td>{produto.validade}</td>
                  <td style={{ position: 'relative' }}>                     
                    {produto.quantidade}
                    <div style={{ 
                      width: '2px', 
                      height: '22px', 
                      backgroundColor: produto.corValidade, 
                      position: 'absolute', 
                      right: 2, 
                      top: 8, 
                      borderRadius: '20px',                       
                    }}></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.paginacao}>
          <button
            className={styles.botaoPaginacao}
            onClick={() => irParaPagina(paginaAtual - 1)}
            disabled={paginaAtual === 1}
          >
            Anterior
          </button>
          <span>
            {paginaAtual} de {totalDePaginas}
          </span>
          <button
            className={styles.botaoPaginacao}
            onClick={() => irParaPagina(paginaAtual + 1)}
            disabled={paginaAtual === totalDePaginas}
          >
            Próxima
          </button>
        </div>
      </div>
      <Footer text='Versão 1.0'/>
    </div>
  );
};

export default EstoquePage;
