'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../../../components/header/page';
import Footer from '../../../components/footer/page';
import styles from '../style/addProdutos.module.css';
import { useRouter } from 'next/navigation';

const AddProdutos: React.FC = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [descricao, setDescricao] = useState('');
  const [pesoBruto, setPesoBruto] = useState(0);
  const [pesoLiquido, setPesoLiquido] = useState(0);
  const [quantidade, setQuantidade] = useState(0);
  const [ultimaCompra, setUltimaCompra] = useState('');
  const [unidade, setUnidade] = useState('UN');
  const [validade, setValidade] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setCurrentDate(today);
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleCancel = () => {
    router.push('/adicionar');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!descricao) {
      alert('Por favor, preencha o campo "Descrição".');
      return;
    }

    if (!ultimaCompra) {
      alert('Por favor, preencha o campo "Última Compra" com uma data válida.');
      return;
    }

    if (!validade) {
      alert('Por favor, preencha o campo "Validade" com uma data válida.');
      return;
    }

    axios
      .post('http://localhost:8080/estoque/produtos/novo', {
        descricao: descricao,
        data_de_compra: ultimaCompra,
        unidade: unidade,
        data_de_validade: validade,
        quantidade: quantidade,
        peso_bruto: pesoBruto,
        peso_liquido: pesoLiquido
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json;charset=UTF-8',
        }
      })
      .then((response) => {
        if (response.status === 201) {
          // Mostrar toast de sucesso
        } else {
          // Mostrar toast de erro
        }
      })
  };

  return (
    <div className='flex flex-col h-full'>
      <Header />

      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.formTitle}>Adicionar Novo Produto</h2>

          <form className={styles.formGrid} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="descricao">Descrição:
                <input
                  type="text"
                  id="descricao"
                  placeholder="Nome Do Produto"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  required
                />
              </label>
            </div>

            <div className={styles.singleLine}>
              <div className={styles.formGroup}>
                <label htmlFor="unidade">Unidade:
                  <select id="unidade" onChange={(e) => setUnidade(e.target.value)}>
                    <option value="UN">UN</option>
                    <option value="CX">CX</option>
                    <option value="KG">KG</option>
                  </select>
                </label>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="ultimaCompra">Última Compra:
                  <input
                    type="date"
                    id="ultimaCompra"
                    value={ultimaCompra}
                    onChange={(e) => setUltimaCompra(e.target.value)}
                    max={currentDate} 
                    required 
                  />
                </label>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="validade">Validade:
                  <input
                    type="date"
                    id="validade"
                    value={validade}
                    onChange={(e) => setValidade(e.target.value)}
                    min={currentDate} 
                    required 
                  />
                </label>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="quantidade">Quantidade:
                  <input
                    type="number"
                    id="quantidade"
                    placeholder="0000"
                    onChange={(e) => setQuantidade(parseInt(e.target.value) || 0)}
                    min="0"
                    step="1"
                  />
                </label>
              </div>
            </div>

            <div className={styles.singleLine}>
              <div className={styles.formGroup}>
                <label htmlFor="pesoBruto">Peso Bruto:
                  <input
                    type="number"
                    id="pesoBruto"
                    placeholder="0,000"
                    onChange={(e) => setPesoBruto(parseFloat(e.target.value) || 0)}
                    min="0"
                    step="any"
                  />
                </label>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="pesoLiquido">Peso Líquido:
                  <input
                    type="number"
                    id="pesoLiquido"
                    placeholder="0,000"
                    onChange={(e) => setPesoLiquido(parseFloat(e.target.value) || 0)}
                    min="0"
                    step="any"
                  />
                </label>
              </div>
            </div>

            <div className={styles.buttonGroup}>
              <button className={styles.saveButton} type="submit">Salvar</button>
              <button className={styles.cancelButton} type="button" onClick={handleCancel}>Cancelar</button>
            </div>
          </form>
        </div>
      </div>

      <Footer text="Versão 1.0" />
    </div>
  );
};

export default AddProdutos;
