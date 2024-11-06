CREATE TABLE estoque (
    id SERIAL PRIMARY KEY,
    produto_id INT,
    descricao VARCHAR(100),
    unidade VARCHAR(10),
    validade TIMESTAMP,
    compra TIMESTAMP,
    peso_bruto DECIMAL(10, 2),
    peso_liquido DECIMAL(10, 2),
    FOREIGN KEY (produto_id) REFERENCES produto(id)
);