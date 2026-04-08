-- Listar bancos
\l

-- Conectar a um banco
\c plataforma_cursos

-- Listar tabelas
\dt

-- Ver estrutura de uma tabela
\d nome_da_tabela

-- Inserir dados
INSERT INTO tabela (col1, col2) VALUES ('valor1', 'valor2');

-- Atualizar dados
UPDATE tabela SET col1='novo_valor' WHERE id=1;

-- Deletar dados
DELETE FROM tabela WHERE id=1;

-- Limpar tabela
TRUNCATE TABLE tabela;