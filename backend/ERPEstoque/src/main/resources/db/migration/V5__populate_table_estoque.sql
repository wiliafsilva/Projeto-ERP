INSERT INTO estoque (produto_id, descricao, unidade, validade, compra, peso_bruto, peso_liquido)
VALUES
    ((SELECT id FROM produto WHERE descricao = 'Arroz' LIMIT 1), 'Arroz', 'KG', '2025-01-23 00:00:00', '2024-12-24 00:00:00', null, null),
    ((SELECT id FROM produto WHERE descricao = 'Arroz' LIMIT 1), 'Arroz', 'KG', '2025-01-22 00:00:00', '2024-12-26 00:00:00', null, null),
    ((SELECT id FROM produto WHERE descricao = 'Arroz' LIMIT 1), 'Arroz', 'KG', '2025-01-22 00:00:00', '2024-12-29 00:00:00', null, null),
    ((SELECT id FROM produto WHERE descricao = 'Arroz' LIMIT 1), 'Arroz', 'KG', '2025-01-10 00:00:00', '2024-12-29 00:00:00', null, null),
    ((SELECT id FROM produto WHERE descricao = 'Feijão' LIMIT 1), 'Feijão', 'KG', '2024-11-30 00:00:00', '2024-10-24 00:00:00', null, null);
