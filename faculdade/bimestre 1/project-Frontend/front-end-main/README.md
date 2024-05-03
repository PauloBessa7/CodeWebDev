# Programação Front end

Este guia de estudos serve para exemplificar e compactar conceitos de Programação Frontend. Não utilize esses exemplos de código na avaliação, pois o objetivo é que você seja capaz de pensar e codificar!

#### HTML
- É uma linguagem de marcação de Hipertexto para estruturar páginas web e seu conteúdo. O conteúdo pode ser estruturado em parágrafos, em uma lista com marcadores ou usando imagens e tabelas.

- Elemento `<html>`. Esse elemento envolve todo o conteúdo da página e às vezes é conhecido como o elemento raiz.
- Elemento `<head>`. Esse elemento age como um recipiente de tudo o que você deseja incluir em uma página HTML que não é o conteúdo que você quer mostrar para quem vê sua página. Isso inclui coisas como palavras-chave e uma descrição que você quer que apareça nos resultados de busca, CSS para dar estilo ao conteúdo, declarações de conjuntos de caracteres e etc.
- `<meta charset="utf-8">` — Elemento define o conjunto de caracteres que seu documento deve usar para o UTF-8, que inclui praticamente todos os caracteres da grande maioria dos idiomas escritos. Essencialmente, agora ele pode manipular qualquer conteúdo textual que você possa colocar. Não há razão para não definir isso e assim pode ajudar a evitar alguns problemas no futuro.
- Elemento `<title>`. Ele define o título da sua página, que é o título que aparece na guia do navegador onde sua página é carregada. Ele também é usado para descrever a página quando você a adiciona aos favoritos.
- Elemento `<body>`. Contém todo o conteúdo que você quer mostrar ao público que visita sua página, seja texto, imagens, vídeos, jogos, faixas de áudio reproduzíveis ou qualquer outra coisa.

- Documentação: [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)


#### CSS
- Assim como o HTML, o CSS não é realmente uma linguagem de programação. Também não é uma linguagem de marcação — é uma linguagem de folhas de estilos. Isso significa que o CSS permite aplicar estilos seletivamente a elementos em documentos HTML.

- Exemplos de criação de classe:
  
  - Seletor (Selector): O nome do elemento HTML no começo do conjunto de regras.
    ```
    p { color: red }
    ```

  - Classe (Class): Deve criar um nome e adicionar no elemento HTML.
    ```
    .texto { color: red }
    <p class="texto"> Meu texto </p>
    ```

  - Id: Deve criar um identificador e adicionar no elemento HTML.
    ```
    #texto { color: red }
    <p id="texto"> Meu texto </p>
    ```
    
- Documentação: [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
