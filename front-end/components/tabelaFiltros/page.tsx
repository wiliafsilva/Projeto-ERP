'use client';
import React, { useState, useEffect } from 'react';
import styles from '../../src/app/style/Pesquisa.module.css';
import ProdutosIniciais, { Produto } from '../produtos/page';

const parseDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split('/').map(Number);
  return new Date(year, month - 1, day);
};

const normalizar = (texto: string): string => {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

const TabelaProdutos: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>(ProdutosIniciais);
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

    const produtosPesquisados = produtosComStatusAtualizado.filter(produto =>
      normalizar(produto.descricao).includes(normalizar(pesquisa))
    );

    const produtosOrdenados = produtosPesquisados.sort((a, b) => {
      const campoA = a[ordem as keyof Produto];
      const campoB = b[ordem as keyof Produto];

      if (ordem === 'validade' || ordem === 'compra') {
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
    <div>
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
  );
};

export default TabelaProdutos;
