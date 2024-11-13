'use client';

import axios from 'axios';
import $ from 'jquery';
import React, { useState, useEffect } from 'react';
import stylesA from '@/app/style/Adicionar.module.css';
import stylesE from '@/app/style/Editar.module.css';
import stylesP from '@/app/style/Pesquisa.module.css';
import stylesR from '@/app/style/Remover.module.css';
import { useRouter } from 'next/navigation';
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";


interface Produto {
  id: string,
  descricao: string,
  compra: string,
  validade: string,
  quantidade: number
}

const parseDateStringToDate = (dateString: string): Date => {
  return new Date(dateString);
};

const parseDateStringToLocaleDateString = (dateString: string): string => {
  return parseDateStringToDate(dateString).toLocaleString().slice(0, 10);
};

const normalizar = (texto: string): string => {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

interface TabelaProdutosProps {
  titulo?: string,
  tipo: 'adicionar' | 'pesquisar' | 'editar' | 'remover'
}

const TabelaProdutos = ({ titulo, tipo }: TabelaProdutosProps) => {
  const router = useRouter();
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [filtro, setFiltro] = useState<string>('todos');
  const [pesquisa, setPesquisa] = useState<string>('');
  const [ordem, setOrdem] = useState<string>('codigo');
  const [direcaoOrdem, setDirecaoOrdem] = useState<'asc' | 'desc'>('asc');
  const [paginaAtual, setPaginaAtual] = useState<number>(1);
  const [itensPorPagina] = useState<number>(10);

  const ObterProdutos = async () => {
    const response = await axios
      .get('http://localhost:8080/estoque/produtos', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json;charset=UTF-8',
        }
      })
    return response.data;
  }

  const fetchProdutos = async () => {
    const produtosData = await ObterProdutos();
    setProdutos(produtosData);
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  const filtrarProdutos = () => {
    const dataServidor = new Date();

    const produtosComStatusAtualizado = produtos.map(produto => {
      const validade = parseDateStringToDate(produto.validade);
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
      produto.id.toString().includes(pesquisa)
    );

    const produtosOrdenados = produtosPesquisados.sort((a, b) => {
      const campoA = a[ordem as keyof Produto];
      const campoB = b[ordem as keyof Produto];

      if (ordem === 'validade') {
        const dataA = parseDateStringToDate(campoA as string);
        const dataB = parseDateStringToDate(campoB as string);
        return direcaoOrdem === 'asc' ? dataA.getTime() - dataB.getTime() : dataB.getTime() - dataA.getTime();
      }

      if (ordem === 'compra') {
        const dataA = parseDateStringToDate(campoA as string);
        const dataB = parseDateStringToDate(campoB as string);
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
  const handleAddProduct = () => {
    router.push('/addProdutos'); 
  };

  const handleEditar = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const produtoId = parseInt($(event.target).closest('tr').prop('id')) || 0;
    router.push(`/editarProdutos/${produtoId}`);
  };

  const handleExluir = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const produtoId = parseInt($(event.target).closest('tr').prop('id')) || 0;
    axios
      .delete(`http://localhost:8080/estoque/produtos/${produtoId}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json;charset=UTF-8',
        }
      })
      .then((response) => {
        fetchProdutos();
      });
  }

  return (
    <div className={stylesA.container}>
      <div className={stylesA.title}>
        <h2 className={stylesA.title_h2}>{titulo}</h2>
      </div>
      <div className={stylesA.pesquisa}>
        <span className={stylesA.label}>Pesquisar:</span>
        <div>
          <input
            type="text"
            className={stylesA.inputPesquisa}
            placeholder="Nome do Produto ou Código"
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            />
          { tipo == 'adicionar' && <button className={stylesA.botaoAdicionar} type='button' onClick={handleAddProduct}>Adicionar</button> }
        </div>
      </div>

      <div className={stylesP.botoes}>
        <button className={`${stylesP.botao} ${stylesP.btnTodos}`} onClick={() => setFiltro('todos')}>Todos</button>
        <button className={`${stylesP.botao} ${stylesP.btnVencidos}`} onClick={() => setFiltro('vencidos')}>Vencidos</button>
        <button className={`${stylesP.botao} ${stylesP.btnAVencer}`} onClick={() => setFiltro('aVencer')}>A Vencer</button>
        <button className={`${stylesP.botao} ${stylesP.btnComEstoque}`} onClick={() => setFiltro('comEstoque')}>Com Estoque</button>
        <button className={`${stylesP.botao} ${stylesP.btnZerados}`} onClick={() => setFiltro('zerado')}>Zerados</button>
        <button className={`${stylesP.botao2} ${stylesP.btnEspecial}`} onClick={() => alert('Gerar Relatório')}>Imprimir</button>
      </div>

      <div className={stylesP.tableWrapper}>
        <table className={stylesP.table}>
          <thead>
            <tr>
              <th onClick={() => ordenarPor('codigo')}>Código</th>
              <th onClick={() => ordenarPor('descricao')}>Descrição</th>
              <th onClick={() => ordenarPor('compra')}>Data de Compra</th>
              <th onClick={() => ordenarPor('validade')}>Validade</th>
              <th onClick={() => ordenarPor('quantidade')}>Quantidade</th>
              {tipo == 'editar' && <th></th>}
              {tipo == 'remover' && <th></th>}
            </tr>
          </thead>
          <tbody>
            {produtosPaginated.map((produto) => (
              <tr id={produto.id} key={produto.id} data-status={produto.status}>
                <td>
                  <div style={{ 
                    width: '2px', 
                    height: '22px', 
                    backgroundColor: produto.corValidade, 
                    display: 'inline-block', 
                    marginRight: '10px', 
                    borderRadius: '20px' 
                  }}></div>
                  {produto.id.toString().padStart(4, '0')}
                </td>
                <td>{produto.descricao}</td>
                <td>{parseDateStringToLocaleDateString(produto.compra)}</td>
                <td>{parseDateStringToLocaleDateString(produto.validade)}</td>
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
                {tipo == 'editar' &&
                  <td>
                    <div 
                      className={`flex justify-center items-center px-2 py-2 pointer hover:black`}
                      style={{'color': '#2563eb'}}
                      onClick={(event) => handleEditar(event)}
                    >
                      <FaPencilAlt />
                    </div>
                  </td>
                }
                {tipo == 'remover' &&
                  <td>
                    <div 
                      className={`flex justify-center items-center ${stylesR.FaTrash} px-2 py-2 pointer hover:text-red-800`}
                      onClick={(event) => handleExluir(event)}
                    >
                      <FaTrashAlt />
                    </div>
                  </td>
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={stylesP.paginacao}>
        <button
          className={stylesP.botaoPaginacao}
          onClick={() => irParaPagina(paginaAtual - 1)}
          disabled={paginaAtual === 1}
        >
          Anterior
        </button>
        <span>
          {paginaAtual} de {totalDePaginas}
        </span>
        <button
          className={stylesP.botaoPaginacao}
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
