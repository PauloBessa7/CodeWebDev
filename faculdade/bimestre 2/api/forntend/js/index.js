// function todosLanches(){
//     fetch('http://localhost:3000/lanches') // faz a pesquisa
//     .then(data => data.json()) // tranforma em uma estrutura de dados de json para js
//     .then(lanches => console.log(lanches)) // mostra esses dados
//     .cath((err) => console.log(err)); // apresenta um erro
// }

const url = 'http://localhost:3000/lanches/';

function todosLanches(){
    fetch('http://localhost:3000/lanches') // faz a pesquisa
    .then(response => {
        return response.json() ;
    })// tranforma em uma estrutura de dados de json para js
    .then((lanches) => console.log("Meus lanches", lanches))
    .catch((err) => {
        console.log("Erro ", err);
    });
}

/*
    Para mandar e receber informações :

    HEADERS 
    VERBO HTTP -> GET, POST, DELETE ...
    TOKEN -> PARA FAZER AUTENTICAÇÃO

    OQ É DEVOLVIVO

    TOKEN GIGANTE QUE DESCOMPACTADO NOS DÁ AS INFORMAÇÕES

*/ 

function lanchePorID(){
    let id = document.getElementById("identificador").value;
    lanchesID(id);
}

function lanchesID(id){
    fetch(`http://localhost:3000/lanches/${id}`)
    .then((coisa) => coisa.json())
    .then((lanches) => console.log(lanches))
    .catch((err) => console.log("Erro : ",err));
}

function criarLanche(){
    let novoLanche = {
        id: "3",
        igredientes: [
          "hamburger de milho",
          "Carne de galo",
          "calabresa",
          "molho crocante"
        ],
        nome: "Pao",
        valor: 20,
        descricao: "Pão e agua"
    };

    let parametros = {
        method : "POST",

        headers : {
            "Content-type" : "application/json",
        },
        
        body :JSON.stringify(novoLanche),
    };

    fetch(url, parametros)
    .then((response) => response.json())
    .then((valor) => console.log(valor))
    .catch((err) => console.log("Erro : ",err));
}

