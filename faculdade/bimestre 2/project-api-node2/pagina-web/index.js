const url = "http://localhost:3000/pessoas";

function listarPessoas(){

    let condicao = {
        method : "GET",
        headers : {
            "Content-type" : "application/json"
        }
    }
    
    fetch(url,condicao)
    .then(resp => resp.json())
    .then(pessoas => {
        console.log(pessoas);
        let divPessoas = document.getElementById('div-pessoas');
        divPessoas.innerHTML = "";
        divPessoas.innerHTML = JSON.stringify(pessoas);
        return pessoas
    })
    .catch(err => console.log("Erro ",err));
}

function idPessoa(){

    let id = document.getElementById('id-pessoa').value;

    let condicao = {
        method : "GET",
        headers : {
            "Content-type" : "application/json"
        }
    }

    fetch(`${url}/${id}`,condicao)
    .then(resp => resp.json())
    .then(pessoa => {
        console.log("Pessoa procurada : ",pessoa);
        
        let divPessoa = document.getElementById('div-id-pessoa');
        divPessoa.innerHTML = '';
        divPessoa.innerHTML = JSON.stringify(pessoa)
    })
}

function adicionarPessoa(){
    let novaPessoa = {
        nome : document.getElementById('nome-pessoa').value
    }

    let condicao = {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(novaPessoa)
    }

    fetch(url,condicao)
    .then(resp => resp.json())
    .then(nova => console.log(`Pessoa ${nova} adicionado`))
    .catch(erro => console.log("Erro : ",erro))
}

function editarPessoa(){
    let id = document.getElementById('id-pessoa-troca').value;
    let nome = document.getElementById('nome-novo-pessoa').value;

    let troca = {
        id : id,
        nome : nome
    }

    let condicao = {
        method : "PUT",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(troca)
    }

    fetch(`${url}/${id}`,condicao)
    .then(resp => resp.json())
    .then(pessoa => console.log(pessoa))
    .catch(erro => console.log("Erro : ",erro))
}

function deletarPessoa(){
    let id = document.getElementById('id-pessoa-delete').value;

    let condicao = {
        method : "DELETE",
        headers : {
            "Content-type" : "application/json"
        }
    }

    fetch(`${url}/${id}`,condicao)
    .then(resp => resp.json())
    .catch(erro => console.log("Erro : ",erro))
}

let pessoas = [
    {
      "id": 1,
      "nome": "matheu albuquerque"
    },
    {
      "id": 3,
      "nome": "alisson"
    },
    {
      "id": 5,
      "nome": "renata"
    },
    {
      "id": 4,
      "nome": "magal"
    },
    {
      "id": 2,
      "nome": "nicolas"
    },
    {
      "id": 7,
      "nome": "marim"
    },
    {
      "id": 6,
      "nome": "paulo bessa"
    }
  ]

  pessoas.sort((a,b) => {
    return b.id - a.id;
  });
  console.log(pessoas);

pessoas.forEach(e => {
    console.log(e.nome);
})

let pessoa = pessoas.filter(e => e.id == 1);
console.log(pessoa)

let soma = pessoas.some()

