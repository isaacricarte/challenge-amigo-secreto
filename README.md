# Introdução ao Projeto
Este é o projeto **Challenge Amigo Secreto**, que é um requisito para a conclusão da primeira fase do projeto Oracle Next Education em parceria com a Alura.

O projeto consiste em um sorteador de nomes, que aleatoriamente determina seu "amigo secreto" a partir de uma lista criada pelo usuário. 

O projeto possui duas validações: de campo preenchido e de nome já incluído no sorteio. A validação de campo preenchido verifica se algum nome foi digitado; caso contrário, ela retorna um alert e não registra a tentativa. A de nome já incluído impede que o mesmo nome seja incluído duas vezes para evitar repetições, retornando um alert e pedindo alguma mudança na tentativa.

Há também o botão "Recomeçar sorteio", para que o usuário não precise recarregar a página quando quiser criar um novo sorteio.

Os botões "Sortear amigo" e "Recomeçar sorteio" receberam o atributo disabled para que o usuário não consiga "sortear" um valor sem inserir um nome no campo input.

Por fim, para facilitar a utilização, o projeto permite a inserção de itens na lista ao pressionar a tecla enter.

## Funcionalidades
- Adicionar nomes em uma lista;
- Validar se o campo input não está vazio;
- Validar se o nome inserido não é repetido;
- Visualizar a lista com os nomes inseridos;
- Realizar sorteios aleatórios, de forma ilimitada;
- Recomeçar lista de nomes sem recarregar a página;
- Inserir um valor apertando enter.