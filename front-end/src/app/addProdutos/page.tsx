'use client';

import React, { useEffect, useState } from 'react';
import Header from '../../../components/header/page';
import Footer from '../../../components/footer/page';
import styles from '../style/addProdutos.module.css';
import { useRouter } from 'next/navigation';

const AddProdutos: React.FC = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleCancel = () => {
    router.push('/adicionar');
  };

  return (
    <div className='flex flex-col h-full'>
      <Header />

      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.formTitle}>Adicionar Novo Produto</h2>

          <form className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label htmlFor="descricao">Descrição:
                <input type="text" id="descricao" placeholder="Nome Do Produto" />
              </label>
            </div>

            <div className={styles.singleLine}>
              <div className={styles.formGroup}>
                <label htmlFor="unidade">Unidade:
                  <select id="unidade">
                    <option value="UN">UN</option>
                    <option value="CX">CX</option>
                    <option value="KG">KG</option>
                  </select>
                </label>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="ultimaCompra">Última Compra:
                  <input type="date" id="ultimaCompra" />
                </label>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="validade">Validade:
                  <input type="date" id="validade" />
                </label>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="quantidade">Quantidade:
                  <input type="number" id="quantidade" placeholder="0000" />
                </label>
              </div>
            </div>

            <div className={styles.singleLine}>
              <div className={styles.formGroup}>
                <label htmlFor="pesoBruto">Peso Bruto:
                  <input type="number" id="pesoBruto" placeholder="0,000"/>
                </label>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="pesoLiquido">Peso Líquido:
                  <input type="number" id="pesoLiquido" placeholder="0,000"/>
                </label>
              </div>
            </div>
          <div className={styles.buttonGroup}>
            <button className={styles.saveButton}>Salvar</button>
            <button className={styles.cancelButton} onClick={handleCancel}>Cancelar</button>
          </div>
          </form>
        </div>
      </div>

      <Footer text='Versão 1.0' />
    </div>
  );
};

export default AddProdutos;
