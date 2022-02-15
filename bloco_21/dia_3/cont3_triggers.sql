USE betrybe_automoveis;
SELECT * FROM log_operacoes;

-- 1
DELIMITER $$
CREATE TRIGGER insert_car
	BEFORE INSERT ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'INSERT',
        NEW.disponivel_em_estoque = 1;
END $$
DELIMITER ;

INSERT INTO carros (id_carro, preco)
VALUES (1, 50000);

-- 2
DELIMITER $$
CREATE TRIGGER update_car
	BEFORE UPDATE ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'ATUALIZACAO';
END $$
DELIMITER ;

UPDATE carros
SET preco = preco * 1.50
WHERE id_carro = 1;

-- 3
DELIMITER $$
CREATE TRIGGER delete_car
	AFTER DELETE ON carros
    FOR EACH ROW
BEGIN
	INSERT INTO log_operacoes (operacao_id, tipo_operacao, data_ocorrido)
    VALUES (OLD.id_carro, 'EXCLUSÃO', NOW());
END $$
DELIMITER ;

DELETE FROM carros
WHERE id_carro = 1;
