export interface Produto {
    codigo: string;
    descricao: string;
    compra: string;
    validade: string;
    quantidade: number;
    status: string;
  }
  
  const ProdutosIniciais: Produto[] = [
    {
      "codigo": "00001",
      "descricao": "PÃO INTEGRAL 450g",
      "compra": "31/08/2024",
      "validade": "30/09/2024",
      "quantidade": 0,
      "status": "comEstoque"
  },
  {
      "codigo": "00002",
      "descricao": "LEITE UHT 1L",
      "compra": "10/08/2024",
      "validade": "10/09/2024",
      "quantidade": 50,
      "status": "comEstoque"
  },
  {
      "codigo": "00003",
      "descricao": "ARROZ 5kg",
      "compra": "01/07/2024",
      "validade": "01/12/2024",
      "quantidade": 30,
      "status": "comEstoque"
  },
  {
      "codigo": "00004",
      "descricao": "FEIJÃO 1kg",
      "compra": "15/08/2024",
      "validade": "15/09/2024",
      "quantidade": 20,
      "status": "aVencer"
  },
  {
      "codigo": "00005",
      "descricao": "MACARRÃO 500g",
      "compra": "25/07/2024",
      "validade": "25/09/2024",
      "quantidade": 60,
      "status": "comEstoque"
  },
  {
      "codigo": "00006",
      "descricao": "ÓLEO DE SOJA 900ml",
      "compra": "20/06/2024",
      "validade": "20/11/2024",
      "quantidade": 25,
      "status": "comEstoque"
  },
  {
      "codigo": "00007",
      "descricao": "SABÃO EM PÓ 1kg",
      "compra": "05/08/2024",
      "validade": "05/10/2024",
      "quantidade": 40,
      "status": "comEstoque"
  },
  {
      "codigo": "00008",
      "descricao": "CAFÉ 250g",
      "compra": "15/09/2024",
      "validade": "15/11/2024",
      "quantidade": 15,
      "status": "comEstoque"
  },
  {
      "codigo": "00009",
      "descricao": "BISCOITO RECHEADO 400g",
      "compra": "01/09/2024",
      "validade": "01/10/2024",
      "quantidade": 70,
      "status": "aVencer"
  },
  {
      "codigo": "00010",
      "descricao": "SUCO DE LARANJA 1L",
      "compra": "12/08/2024",
      "validade": "12/09/2024",
      "quantidade": 80,
      "status": "aVencer"
  },
  {
      "codigo": "00011",
      "descricao": "BISCOITO CREAM CRACKER 350g",
      "compra": "01/07/2024",
      "validade": "01/12/2024",
      "quantidade": 55,
      "status": "aVencer"
  },
  {
      "codigo": "00012",
      "descricao": "SUCO DE MANGA 1L",
      "compra": "12/09/2024",
      "validade": "12/09/2024",
      "quantidade": 61,
      "status": "aVencer"
  },
  {
      "codigo": "00013",
      "descricao": "MANTEIGA 200g",
      "compra": "20/08/2024",
      "validade": "20/09/2024",
      "quantidade": 45,
      "status": "comEstoque"
  },
  {
      "codigo": "00014",
      "descricao": "QUEIJO MUZZARELA 300g",
      "compra": "15/08/2024",
      "validade": "15/10/2024",
      "quantidade": 35,
      "status": "comEstoque"
  },
  {
      "codigo": "00015",
      "descricao": "CERVEJA 350ml",
      "compra": "10/01/2024",
      "validade": "10/12/2024",
      "quantidade": 100,
      "status": "comEstoque"
  },
  {
      "codigo": "00016",
      "descricao": "VINHO TINTO 750ml",
      "compra": "25/07/2024",
      "validade": "25/07/2025",
      "quantidade": 20,
      "status": "comEstoque"
  },
  {
      "codigo": "00017",
      "descricao": "MAIONESE 500g",
      "compra": "01/08/2024",
      "validade": "01/02/2025",
      "quantidade": 28,
      "status": "comEstoque"
  },
  {
      "codigo": "00018",
      "descricao": "KETCHUP 300g",
      "compra": "15/08/2024",
      "validade": "15/01/2025",
      "quantidade": 50,
      "status": "comEstoque"
  },
  {
      "codigo": "00019",
      "descricao": "SAL 1kg",
      "compra": "01/07/2024",
      "validade": "01/07/2026",
      "quantidade": 80,
      "status": "comEstoque"
  },
  {
      "codigo": "00020",
      "descricao": "FARINHA DE TRIGO 1kg",
      "compra": "10/08/2024",
      "validade": "10/11/2024",
      "quantidade": 40,
      "status": "comEstoque"
  },
  {
      "codigo": "00021",
      "descricao": "LEITE CONDENSADO 395g",
      "compra": "01/09/2024",
      "validade": "01/03/2025",
      "quantidade": 25,
      "status": "comEstoque"
  },
  {
      "codigo": "00022",
      "descricao": "CREME DE LEITE 200g",
      "compra": "01/09/2024",
      "validade": "01/12/2024",
      "quantidade": 30,
      "status": "comEstoque"
  },
  {
      "codigo": "00023",
      "descricao": "BATATA FRITA Congelada 1kg",
      "compra": "01/08/2024",
      "validade": "01/02/2025",
      "quantidade": 60,
      "status": "comEstoque"
  },
  {
      "codigo": "00024",
      "descricao": "FRANGO Congelado 1kg",
      "compra": "15/08/2024",
      "validade": "15/10/2024",
      "quantidade": 45,
      "status": "comEstoque"
  },
  {
      "codigo": "00025",
      "descricao": "PEIXE Congelado 1kg",
      "compra": "25/08/2024",
      "validade": "25/11/2024",
      "quantidade": 30,
      "status": "comEstoque"
  },
  {
      "codigo": "00026",
      "descricao": "ALFACE 1 maço",
      "compra": "10/09/2024",
      "validade": "12/09/2024",
      "quantidade": 20,
      "status": "aVencer"
  },
  {
      "codigo": "00027",
      "descricao": "TOMATE 1kg",
      "compra": "12/09/2024",
      "validade": "14/09/2024",
      "quantidade": 15,
      "status": "aVencer"
  },
  {
      "codigo": "00028",
      "descricao": "CENOURA 500g",
      "compra": "10/09/2024",
      "validade": "17/09/2024",
      "quantidade": 25,
      "status": "aVencer"
  },
  {
      "codigo": "00029",
      "descricao": "MAÇÃ kg",
      "compra": "05/09/2024",
      "validade": "12/09/2024",
      "quantidade": 30,
      "status": "aVencer"
  },
  {
    "codigo": "00030",
    "descricao": "BATATA kg",
    "compra": "05/02/2024",
    "validade": "19/09/2024",
    "quantidade": 30,
    "status": "aVencer"
},
  ];
  
  export default ProdutosIniciais;
  