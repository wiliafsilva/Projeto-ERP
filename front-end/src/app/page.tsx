// pages/index.tsx
"use client";
import React from 'react';
import styles from '../app/style/slide.module.css';
import { useRouter } from 'next/navigation';

const HeroPage: React.FC = () => {
  const router = useRouter();

  const handleComecar = () => {
    router.push('/login');
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <img src="https://i.pinimg.com/originals/5d/26/a1/5d26a173f443cbd190e34481438d474b.png" alt="Logo" className={styles.logo} />
        <h1 className={styles.titulolog}>Gerenciador de Estoque</h1>
        <nav>
          <a href="#funcionalidades" className={styles.navLink}>FUNCIONALIDADES</a>
          <a href="#faq" className={styles.navLink}>CONTATOS</a>
          <a href="#precos" className={styles.navLink}>PREÇOS</a>
          <a href="#precos" className={styles.navLink}>SAIBA MAIS</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Sistema de Gerenciamento de Estoque</h1>
          <p className={styles.heroText}>Equipe:</p>
          <p className={styles.heroText1}>Franck Patrick Hora Vasconcelos</p>
          <p className={styles.heroText1}>Murilo Pedral Mota</p>
          <p className={styles.heroText1}>Rafael Menezes Gonçalves </p>
          <p className={styles.heroText1}>Renê Mendonça Marinho</p>
          <p className={styles.heroText1}>Richard de Souza Santos</p>
          <p className={styles.heroText1}>Wilia Francisco da Silva</p>
        </div>
        <div className={styles.heroImage}>
          <img src="https://guardeaju.com.br/wp-content/uploads/2021/09/Onde-guardar-o-estoque-de-sua-empresa.jpg" alt="Imagem de estoque" className={styles.image} />
        </div>
      </section>

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Índice</h1>
          <p className={styles.heroText2}>- Problema</p>
          <p className={styles.heroText2}>- Solução</p>
          <p className={styles.heroText2}>- Ferramentas de Desenvolvimento</p>
          <p className={styles.heroText2}>- Diferencial</p>
          <p className={styles.heroText2}>- Solução Desenvolvida</p>
          <p className={styles.heroText2}>- Evoluções Futuras</p>
          <p className={styles.heroText2}>- Testes</p>
          <p className={styles.heroText2}>- Equipe de Desenvolvimento</p>
        </div>
        <div className={styles.heroImage1}>
          <img src="https://www.galpoessaopaulo.com.br/imagens/locacao-de-galpao-de-estoque-de-produtos-preco.jpg" alt="Imagem de estoque" className={styles.image} />
        </div>
      </section>

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Problema</h1>
          <p className={styles.heroText1}>O mercado do Sr. Renato enfrenta sérios desafios na gestão do estoque, resultando em perdas de produtos, desperdício por itens vencidos. Essa ineficiência impacta na satisfação dos clientes e a reputação do negócio.</p>
        </div>
        <div className={styles.heroImage}>
          <img src="https://img.freepik.com/fotos-premium/area-de-armazenamento-desorganizada-com-caixas-e-detritos-espalhados-num-armazem-mal-iluminado-durante-o-dia_1247367-64014.jpg" alt="Imagem de estoque" className={styles.image} />
        </div>
      </section>

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Solução</h1>
          <p className={styles.heroText2}>Implantar um sistema de gestão de estoque que permita cadastrar os produtos da loja e gerenciá-los de maneira prática e intuitiva, facilitando o acompanhamento das datas de validade e do nível de estoque disponível.</p>
        </div>
        <div className={styles.heroImage1}>
          <img src="https://media.licdn.com/dms/image/D4D12AQESOexsgpXCxQ/article-cover_image-shrink_600_2000/0/1700481932955?e=2147483647&v=beta&t=N12hIB9xC03zIIdBnP_GDnU4FXP2TxcruAXAB5YdmrU" alt="Imagem de estoque" className={styles.image} />
        </div>
      </section>

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Ferramentas de Desenvolvimento</h1>
          <p className={styles.heroText1}>As tecnologias utilizadas incluem um conjunto robusto de linguagens de programação, como TypeScript para o front-end e Java para o back-end, além de frameworks e bibliotecas como React Next, que facilita a criação de interfaces reativas, e Spring Boot, que estrutura APIs RESTful. O banco de dados PostgreSQL oferece confiabilidade e escalabilidade com suporte a transações ACID. As ferramentas de desenvolvimento englobam IntelliJ IDEA e Visual Studio, com gerenciamento realizado por Maven, Docker, Kubernetes e Git, enquanto Node.js e Java Virtual Machine suportam as plataformas front-end e back-end, respectivamente, com hospedagem na AWS. No hardware, o servidor Java Tomcat Servlet se destaca por seu alto desempenho e suporte a HTTP/2, assegurando eficiência e escalabilidade nas aplicações.</p>
        </div>
        <div className={styles.heroImage}>
          <img src="https://tutoriaisexpress.com.br/wp-content/uploads/2024/09/tecnologia-capablog.jpg" alt="Imagem de estoque" className={styles.image} />
        </div>
      </section>

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Diferencial</h1>
          <p className={styles.heroText2}>O sistema se destaca por sua funcionalidade e simplicidade de uso, apresentando uma interface intuitiva e cores harmoniosas que facilitam a navegação. Isso permite que os usuários aproveitem ao máximo todas as funcionalidades sem enfrentar dificuldades.</p>
        </div>
        <div className={styles.heroImage1}>
          <img src="https://uva.br/conteudo/genios-ciencia-computacao-mentes-brilhantes-scaled.webp" alt="Imagem de estoque" className={styles.image} />
        </div>
      </section>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Solução Desenvolvida</h1>
        </div>
      </section>

      <section className={styles.heroSection}>
        <div className={styles.heroImage1}>
          <img src="/images/homePage.jpeg" alt="Imagem home" className={styles.image} />
        </div>
        <div className={styles.heroImage}>
          <img src="images/loginPage.jpeg" alt="Imagem de login" className={styles.image} />
        </div>
      </section>

      <section className={styles.heroSection}>
        <div className={styles.heroImage1}>
          <img src="/images/adicionarPage.jpeg" alt="Imagem home" className={styles.image}/>
        </div>
        <div className={styles.heroImage}>
          <img src="images/pesquisaPage.jpeg" alt="Imagem de login" className={styles.image} />
        </div>
      </section>

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Evoluções Futuras</h1>
          <p className={styles.heroText1}>- Notificações inteligentes (vencimentos, produtos com pouco estoque);<br /> - Integração com outros sistemas; <br /> - Aplicativo Mobile;<br /> - Compatibilidade com leitores de código de barras; <br /> - Uso de QR Code personalizados para gerenciar o armazenamento (WMS - Warehouse Management System)</p>
        </div>
        <div className={styles.heroImage}>
          <img src="https://www.hgcode.com.br/arqConteudo/arqNoticia/foto.png" alt="Imagem de estoque" className={styles.image} />
        </div>
      </section>

      <section className={styles.heroSection}>
        <div className={styles.heroContent}> 
          <h1 className={styles.heroTitle}>Testes</h1>
          <p className={styles.heroText1}>- Testes Funcionais <br />- Testes de Desempenho <br />- Testes de Segurança <br /> - Testes de Usabilidade <br /> - Testes de Regressão <br /> - Testes de Aceitação</p>
        </div>
        <div className={styles.heroImage1}>
          <img src="https://codecrush.com.br/static/images/articles/testes-de-software.png" alt="Imagem de estoque" className={styles.image} />
        </div>
      </section>



      {/* Features Section */}
      <section id="funcionalidades" className={styles.featuresSection}>
        <h1 className={styles.heroTitle}>Equipe de Desenvolvimento</h1>
        <div className={styles.featuresContainer}>
          {[
            { src: 'images/patrick.jpg', name: 'Franck Patrick Hora', role: 'DevOps' },
            { src: 'images/murilo.jpg', name: 'Murilo Pedral Mota', role: 'Scrum Master' },
            { src: 'images/rafael.jpg', name: 'Rafael Menezes Gonçalves', role: 'Desenvolvimento' },
            { src: 'images/rene.jpg', name: 'Renê Mendonça Marinho', role: 'Product Owner ' },
            { src: 'images/richard.jpg', name: 'Richard de Souza Santos', role: 'Desenvolvimento' },
            { src: 'images/wilia.jpg', name: 'Wilia Francisco da Silva', role: 'Desenvolvimento' }
          ].map((item, index) => (
            <div key={index} className={styles.featureCard}>
              <img src={item.src} alt={`Imagem ${index + 1}`} className={styles.featureImage} />
              <p className={styles.descriptionText}>{item.name}</p>
              <p className={styles.descriptionText}>Função: {item.role}</p>
            </div>
          ))}
        </div>
        <button className={styles.heroButton} onClick={handleComecar}>COMECE A USAR AGORA!</button>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2024 Projeto ERP. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default HeroPage;
