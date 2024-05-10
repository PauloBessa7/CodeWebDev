# [Funções de Manipulação de Datas](https://paulobessa7.github.io/CodeWebDev/faculdade/bimestre%202/atividade2/index.html)

Este repositório contém três funções JavaScript para manipulação de datas. As funções são as seguintes:

## 1. `dataMaior(data1, data2)`

Esta função recebe duas datas como parâmetros e retorna a maior delas. Se as datas forem iguais, retorna `false`.

### Parâmetros:

- `data1`: Objeto Date representando a primeira data.
- `data2`: Objeto Date representando a segunda data.

### Retorno:

- Retorna a maior data entre `data1` e `data2`, ou `false` se as datas forem iguais.

## 2. `calcData(data1, data2)`

Esta função calcula a diferença em dias entre duas datas. Se `data1` for maior que `data2`, retorna `false`.

### Parâmetros:

- `data1`: Objeto Date representando a primeira data.
- `data2`: Objeto Date representando a segunda data.

### Retorno:

- Retorna a diferença em dias entre `data1` e `data2`.

## 3. `dataHoje()`

Esta função retorna uma string formatada representando a data e hora atual.

### Retorno:

- Retorna uma string no formato "hh:mm - dd/mm/aaaa" representando a data e hora atuais.

## Exemplo de Uso:

```javascript
let data1 = new Date("2005-02-22");
let data2 = new Date("2005-08-22");

console.log(dataMaior(data1, data2)); // Mon Aug 22 2005 00:00:00 GMT-0300 (Horário Padrão de Brasília)
console.log(calcData(data1, data2)); // 181
console.log(dataHoje()); // Exemplo: 10:30 - 09/05/2024
