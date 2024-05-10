# [Funções de Manipulação de Datas](https://paulobessa7.github.io/CodeWebDev/faculdade/bimestre%202/atividade2/)
# [Link do repositório github](https://github.com/PauloBessa7/CodeWebDev/tree/main/faculdade/bimestre%202/atividade2)
Este projeto consiste em um conjunto de funções em JavaScript para manipulação de datas em uma página web. Abaixo, detalhamos cada uma das funções disponíveis:

## Função `dataMaior()`

Esta função compara duas datas inseridas pelo usuário e exibe qual delas é a maior na página. Se as datas forem iguais, uma mensagem indicando isso será exibida. Se os campos de data não estiverem preenchidos, um alerta será mostrado solicitando que ambos sejam preenchidos.

## Função `difData()`

A função `difData()` calcula a diferença em dias entre duas datas inseridas pelo usuário. Se a primeira data for menor que a segunda, a diferença em dias é calculada e exibida na página. Caso contrário, um alerta é exibido informando que a primeira data precisa ser menor que a segunda. Esta função também verifica se os campos de data estão preenchidos antes de executar o cálculo.

## Função `dataAgora()`

Esta função obtém a data e hora atuais do sistema e exibe na página no formato "hora:minuto - dia/mês/ano".

## Função `verificaCampos()`

A função `verificaCampos()` verifica se os campos de data estão preenchidos. Se algum dos campos estiver vazio, um alerta é exibido solicitando que ambos sejam preenchidos. Essa função é utilizada pelas outras funções para garantir que as operações sejam realizadas apenas quando os campos necessários estiverem preenchidos.

