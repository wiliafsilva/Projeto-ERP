CREATE TABLE public.produto (
    id SERIAL PRIMARY KEY NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    compra DATE NOT NULL,
    validade DATE NOT NULL,
    quantidade INT NOT NULL
);