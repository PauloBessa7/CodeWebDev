// URL
const urlpessoas = 'http://localhost:3000/pessoas';
const urlcontador = 'http://localhost:3000/contador';

let id = -1;
// Criar id
function criarId(){
    condicao = {
        method : "GET",
        headers : {
            "Content-type" : "Application/json"
        }
    }
    
    fetch(urlcontador,condicao)
    .then(res => res.json())
    .then(num => id = num)
    .catch(err => console.log("Erro : ",err))
}
// POST
function criarPessoa(){

    let novaPessoa = {
        id : criarId(),
        nome : document.getElementById('nome').value
    }

    condicao = {
        method : "POST",
        headers : {
            "Content-type" : "Application/json"
        },
        body : JSON.stringify(novaPessoa)
    }

    fetch(urlpessoas,condicao)
    .then(response => response.json())
    .catch(erro => console.log(erro))

   
}
// GET ALL

function listarPessoas(){

    condicao = {
        method : "GET",
        headers : {
            "Content-type" : "Application/json"
        }
    }
   

    fetch(urlpessoas,condicao)
    .then(response => response.json())
    .then(pessoas => {
        let tabela = document.getElementById('tabela');
        tabela.innerHTML = "";

        pessoas.forEach(p => {
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            
            td.innerHTML = p.nome;
            
            tr.appendChild(td);
            tabela.appendChild(tr);
        });
    })
    .catch(err => console.log(err))

   

}
