CREATE TABLE produto (
    id SERIAL PRIMARY KEY,
    compra TIMESTAMP(6) NOT NULL,
    validade TIMESTAMP(6) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    quantidade INT NOT NULL
);
