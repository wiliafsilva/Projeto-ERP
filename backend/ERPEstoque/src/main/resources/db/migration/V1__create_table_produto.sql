CREATE TABLE produto (
    id SERIAL PRIMARY KEY,
    compra TIMESTAMP(6) NOT NULL,
    unidade VARCHAR(2),
    validade TIMESTAMP(6) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    quantidade INT NOT NULL,
    peso_bruto FLOAT,
    peso_liquido FLOAT
);