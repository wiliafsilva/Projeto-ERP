'use client';
import React, { useState, useEffect } from 'react';
import Header from '../../../components/header/page';
import Footer from '../../../components/footer/page';
import styles from '../style/Remover.module.css';
import ProdutosIniciais, { Produto } from '../../../components/produtos/page';
import { FaTrashAlt } from "react-icons/fa";

const parseDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split('/').map(Number);
  return new Date(year, month - 1, day);
};

const normalizar = (texto: string): string => {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

const RemoverPage: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>(ProdutosIniciais);
  const [filtro, setFiltro] = useState<string>('todos');
  const [pesquisa, setPesquisa] = useState<string>('');
  const [ordem, setOrdem] = useState<string>('codigo');
  const [direcaoOrdem, setDirecaoOrdem] = useState<'asc' | 'desc'>('asc');
  const [paginaAtual, setPaginaAtual] = useState<number>(1);
  const [itensPorPagina] = useState<number>(10);
  const [produtoAExcluir, setProdutoAExcluir] = useState<Produto | null>(null);
  const [notificacao, setNotificacao] = useState<string | null>(null);

  useEffect(() => {
    setProdutos(ProdutosIniciais);
  }, []);

    // Confirmar exlusão //
  const confirmarExclusao = (produto: Produto) => {
    setProdutoAExcluir(produto);
  };

    // Cancelar exlusão //
  const cancelarExclusao = () => {
    setProdutoAExcluir(null);
  };

    // Função de Remover Produtos da Lista //
  const removerProduto = (codigo: string, descricao: string) => {
    setProdutos(produtos.filter(produto => produto.codigo !== codigo));
    setNotificacao(`Produto "${descricao}" foi excluído com sucesso.`);
    setProdutoAExcluir(null);

    // Remover notificação após 3 segundos de delay //
    setTimeout(() => {
      setNotificacao(null);
    }, 3000);
  };

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
      normalizar(produto.descricao).includes(normalizar(pesquisa))
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
        <div className={styles.title}>
          <h2 className={styles.title_h2}>Remover Produto</h2>
        </div>

        {/* Notificação de sucesso */}
        {notificacao && (
          <div className={styles.notificacao}>
            {notificacao}
          </div>
        )}

        <div className={styles.pesquisa}>
          <span className={styles.label}>Pesquisar:</span>
          <input
            type="text"
            className={styles.inputPesquisa}
            placeholder="Nome do Produto"
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
                  <td>{produto.quantidade}</td>
                  <td>
                    <div 
                      className={styles.FaTrash} 
                      style={{ cursor: 'pointer', padding: '0 5px' }} 
                      onClick={() => confirmarExclusao(produto)}
                    >
                      <FaTrashAlt />
                    </div>
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

      {/* Modal de confirmação */}
      {produtoAExcluir && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>Confirmar Exclusão</h3>
            <p>Tem certeza de que deseja excluir o produto <strong>{produtoAExcluir.descricao}</strong>?</p>
            <div className={styles.modalActions}>
              <button 
                onClick={() => removerProduto(produtoAExcluir.codigo, produtoAExcluir.descricao)} 
                className={styles.confirmButton}
              >
                Sim
              </button>
              <button onClick={cancelarExclusao} className={styles.cancelButton}>Não</button>
            </div>
          </div>
        </div>
      )}

      <Footer text='Versão 1.0'/>
    </div>
  );
};

export default RemoverPage;
