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
      codigo: '000001',
      descricao: 'PÃO INTEGRAL 450g',
      compra: '31/08/2024',
      validade: '30/09/2024',
      quantidade: 0,
      status: 'comEstoque',
    },
    {
      codigo: '000002',
      descricao: 'LEITE UHT 1L',
      compra: '10/08/2024',
      validade: '10/09/2024',
      quantidade: 50,
      status: 'comEstoque',
    },
    {
      codigo: '000003',
      descricao: 'ARROZ 5kg',
      compra: '01/07/2024',
      validade: '01/12/2024',
      quantidade: 30,
      status: 'comEstoque',
    },
    {
      codigo: '000004',
      descricao: 'FEIJÃO 1kg',
      compra: '15/08/2024',
      validade: '15/09/2024',
      quantidade: 20,
      status: 'aVencer',
    },
    {
      codigo: '000005',
      descricao: 'MACARRÃO 500g',
      compra: '25/07/2024',
      validade: '25/09/2024',
      quantidade: 60,
      status: 'comEstoque',
    },
    {
      codigo: '000006',
      descricao: 'ÓLEO DE SOJA 900ml',
      compra: '20/06/2024',
      validade: '20/11/2024',
      quantidade: 25,
      status: 'comEstoque',
    },
    {
      codigo: '000007',
      descricao: 'SABÃO EM PÓ 1kg',
      compra: '05/08/2024',
      validade: '05/10/2024',
      quantidade: 40,
      status: 'comEstoque',
    },
    {
      codigo: '000008',
      descricao: 'CAFÉ 250g',
      compra: '15/09/2024',
      validade: '15/11/2024',
      quantidade: 15,
      status: 'comEstoque',
    },
    {
      codigo: '000009',
      descricao: 'BISCOITO RECHEADO 400g',
      compra: '01/09/2024',
      validade: '01/10/2024',
      quantidade: 70,
      status: 'aVencer',
    },
    {
      codigo: '000010',
      descricao: 'SUCO DE LARANJA 1L',
      compra: '12/08/2024',
      validade: '12/09/2024',
      quantidade: 80,
      status: 'aVencer',
    }
  ];
  
  export default ProdutosIniciais;
  