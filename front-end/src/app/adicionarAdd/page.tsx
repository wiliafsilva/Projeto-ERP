'use client';
import React, { useState } from 'react';
import Header from '../../../components/header/page';
import Footer from '../../../components/footer/page';
import styles from '../style/Adicionar.module.css';

const AdicionarItem: React.FC = () => {
  const [descricao, setDescricao] = useState<string>('');
  const [quantidade, setQuantidade] = useState<number>(0);
  const [validade, setValidade] = useState<string>('');
  const [arquivo, setArquivo] = useState<File | null>(null);
  const [link, setLink] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setArquivo(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    console.log({
      descricao,
      quantidade,
      validade,
      arquivo,
      link,
    });
    setDescricao('');
    setQuantidade(0);
    setValidade('');
    setArquivo(null);
    setLink('');
  };

  const handleVoltar = () => {
    window.history.back();
  };

  return (
    <div className='flex flex-col h-full'>
      <Header />
      <div className={styles.container}>
        <div className={styles.title}>
          <h2 className={styles.title_h2}>Adicionar Novo Produto</h2>
        </div>
        <div className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="descricao">Descrição:</label>
            <input
              type="text"
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="quantidade">Quantidade:</label>
            <input
              type="number"
              id="quantidade"
              value={quantidade}
              onChange={(e) => setQuantidade(Number(e.target.value))}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="validade">Validade:</label>
            <input
              type="date"
              id="validade"
              value={validade}
              onChange={(e) => setValidade(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="arquivo">Arquivo:</label>
            <input type="file" id="arquivo" onChange={handleFileChange} />
          </div>
          <div className={styles.field}>
            <label htmlFor="link">Link:</label>
            <input
              type="url"
              id="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div className={styles.buttons}>
            <button className={styles.botaoConfirmar} onClick={handleSubmit}>
              Confirmar
            </button>
            <button className={styles.botaoVoltar} onClick={handleVoltar}>
              Voltar
            </button>
          </div>
        </div>
      </div>
      <Footer text='Versão 1.0' />
    </div>
  );
};

export default AdicionarItem;
