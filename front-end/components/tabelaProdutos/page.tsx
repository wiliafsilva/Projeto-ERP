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
  id: number;
  descricao: string;
  data_de_compra: string;
  data_de_validade: string;
  quantidade: number;
}

const parseStringToDate = (dateString: string): Date => {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
};

const parseStringToLocalDate = (dateString: string): String => {
  const date = parseStringToDate(dateString);
  return date.toLocaleDateString();
};

interface TabelaProdutosProps {
  titulo?: string
  tipo: 'listar' | 'adicionar' | 'editar' | 'excluir'
}

const TabelaProdutos = ({ titulo, tipo }: TabelaProdutosProps) => {
  const router = useRouter();
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [pesquisa, setPesquisa] = useState<string>('');

  const obterProdutos = () => {
    axios
    .get('http://localhost:8080/estoque/produtos', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=UTF-8',
      }
    })
    .then((response) => {
      setProdutos(response.data);
    });
  }

  useEffect(() => {
    obterProdutos()
  }, []);

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
        obterProdutos();
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
          { tipo == 'adicionar' && <button className={stylesA.botaoAdicionar} type='button' onClick={handleAddProduct}>Adicionar</button>}
        </div>
      </div>

      <div className={stylesP.botoes}>
        <button className={`${stylesP.botao} ${stylesP.btnTodos}`} onClick={() => {/*setFiltro('todos')*/}}>
          Todos
        </button>
        <button className={`${stylesP.botao} ${stylesP.btnVencidos}`} onClick={() => {/*setFiltro('vencidos')*/}}>
          Vencidos
        </button>
        <button className={`${stylesP.botao} ${stylesP.btnAVencer}`} onClick={() => {/*setFiltro('aVencer')*/}}>
          A Vencer
        </button>
        <button className={`${stylesP.botao} ${stylesP.btnComEstoque}`} onClick={() => {/*setFiltro('comEstoque')*/}}>
          Com Estoque
        </button>
        <button className={`${stylesP.botao} ${stylesP.btnZerados}`} onClick={() => {/*setFiltro('zerado')*/}}>
          Zerados
        </button>
        <button className={`${stylesP.botao2} ${stylesP.btnEspecial}`} onClick={() => alert('Gerar Relatório')}>
          Imprimir
        </button>
      </div>

      <div className={stylesP.tableWrapper}>
        <table className={stylesP.table}>
          <thead>
            <tr>
              <th onClick={() => {/*ordenarPor('codigo')*/}}>Código</th>
              <th onClick={() => {/*ordenarPor('descricao')*/}}>Descrição</th>
              <th onClick={() => {/*ordenarPor('compra')*/}}>Data de Compra</th>
              <th onClick={() => {/*ordenarPor('validade')*/}}>Validade</th>
              <th onClick={() => {/*ordenarPor('quantidade')*/}}>Quantidade</th>
              {tipo == 'editar' && <th></th>}
              {tipo == 'excluir' && <th></th>}
            </tr>
          </thead>
          
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id} id={produto.id.toString()} >
              <td>
                <div style={{
                  width: '2px',
                  height: '22px',
                  backgroundColor: 'green',
                  display: 'inline-block',
                  marginRight: '10px',
                  borderRadius: '20px'
                }}></div>
                {produto.id.toString().padStart(4, '0')}
              </td>
              <td>{produto.descricao}</td>
              <td>{parseStringToLocalDate(produto.data_de_compra)}</td>
              <td>{parseStringToLocalDate(produto.data_de_validade)}</td>
              <td style={{ position: 'relative' }}>                     
                {produto.quantidade}
                <div style={{
                  width: '2px',
                  height: '22px',
                  backgroundColor: 'green',
                  position: 'absolute',
                  right: '10px',
                  top: 8,
                  borderRadius: '20px',
                }}></div>
              </td>
              {tipo == 'editar' &&
                <td>
                  <div 
                    className={`flex justify-center items-center ${stylesE.FaPencilAlt} px-2 py-2 pointer hover:text-red-800`}
                    onClick={(event) => handleEditar(event)}
                  >
                    <FaPencilAlt />
                  </div>
                </td>
              }
              {tipo == 'excluir' &&
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
    </div>
  )
};

export default TabelaProdutos;
