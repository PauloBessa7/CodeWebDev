/*
    - Antes de tudo é necessario ter o node.js instalado na maquina.
        - Link para download : https://nodejs.org/en/download/prebuilt-installer

    - Após isso deve ser instalado o gerenciador de dependecias npm init.
        - Basta acessar o cmd da pasta que deseja fazer o projeto e digitar -> nmp init
        - Após isso uma série de perguntas serão feitas , mas basta confirmar todas para continuar.
        - Depois coloque -> npm install json-server

    - Agora vamos criar nosso "Banco de dados" dentro da pasta que estamos criando o projeto json.
    - Crie um arquivo <nome_do_banco>.json . Exemplo : db.json.

    - Adicione alguns objetos.
        - Exemplo : {
                        "pessoas" : [
                            {
                                "id" : 1,
                                "nome" : "paulo"
                            },

                            {
                                "id" : 2,
                                "nome" : "bruno"
                            },

                            {
                                "id" : 3,
                                "nome" : "ana"
                            },

                            {
                                "id" : 4,
                                "nome" : "michelle"
                            }
                        ]
                    }
    
    - Agora temos um objeto "pessoas" com 4 elementos.

    - Depois disso crie uma pasta para você fazer o sua pagina web
        - Crie um arquivo .html e outro .js
    
    - Agora vamos deixar nosso banco de dados online na porta local 3000 (localhost)
        - Vá no cnd da pasta do projeto e digite -> npx json-server <nome_do_banco>.json . Exemplo : npx json-server db.json
        - Com isso uma mensagem vai aparece dizendo algo do tipo :  Index: http://localhost:3000/

    - Apartir daqui basta usar os métodos a seguir na sua pagina web.
*/
// URL DA APLICAÇÃO
    const url = "http://localhost:3000/pessoas"; // vai servir como direcional para onde deve ser feito as requisições de CRUD
// GET ALL
    function listarPessoas(){

        let condicao = { // variavel que vai servir para o que vamos requisitar para o banco
            method : "GET", // nesse caso vai ser um metodo de get
            headers : {
                "Content-type" : "application/json",
            }
        }

        fetch(url, condicao) // Esse metodo fetch vai receber a url para qual vai requisitar e vai receber o que deve requisitar
        .then(result => result.json()) // Os dados retorna em formato json, mas precisamos dele em formato de objeto de js , assim usamos o .json()
        .then(pessoas => console.log("Pessoas : ",pessoas)) // Mostramos o resultado do objeto que retornou
        .catch(err => console.log("Erro ",err)); // caso tiver algum erro ele vai mostrar no console por meio desse catch
    }
// GET ID

    function procurar(){
        let id = document.getElementById("procurar").value;
        pessoaPorId(id);
    }
    function pessoaPorId(id){
        
        let condicao = {
            method : "GET",
            headers : {
                "Content-type" : "application/json",
            }
        }
        // para procurar por uma pessoa pegamos a url e adicionamos \<numero_do_id>  
        fetch(`${url}/${id}`,condicao) // Exemplo : "http://localhost:3000/pessoas" + "\1" -> nesse caso seria o objeto paulo que retornaria por causa do id 1
        .then(result => result.json())
        .then(pessoa => console.log(pessoa))
        .catch(err => console.log("Erro ",err))

    }
// POST
    function adicionarPessoa(){
        novaPessoa = { // criamos um novo objeto
            id : "5",
            nome : "maria"
        }

        let condicao = {
            method : "POST", // agora estamos fazendo a requisicao de adicionar
            headers : {
                "Content-type" : "application/json",
            },
            body : JSON.stringify(novaPessoa) // agora como condicao temos o body que vai ser o que eu quero adicionar como objeto
            // Alem disso precisamos do metodo JSON.stringify para mandar como requisicao um objeto.js e tranformar em um objeto.json
        }

        fetch(url, condicao)
        .then(result => result.json())
        .then(adicionado => console.log("Pessoa ",adicionado))
        .catch(err => console.log("Erro ",err))
    }
// PUT

    function editarPessoa(){
        let pessoaEditada = {
            id : "1",
            nome : "joao"
        }

        let condicao = {
            method : "PUT",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify(pessoaEditada)
        }

        // apenas colocar na url em qual elemento voce quer colocar/modificar seu novo objeto, nesse caso o elemento 1 esta sendo trocado
        fetch(`${url}/1`,condicao)
        .then(result => result.json())
        .then(editado => console.log(editado, "editado"))
        .catch(err => console.log("Erro ",err))
    }
// DELET
    function deletarPessoa(){

        let condicao = {
            method : "DELETE", // coloca o que voce deseja fazer na requisição
            headers : {
                "Content-type" : "application/json"
            }
        }

        // adicione na url qual elemento voce deseja deletar, nesse caso é o elemento 5
        fetch(`${url}/5`,condicao)
        .then(result => result.json())
        .then(del => console.log(del))
        .catch(err => console.log("Erro ",err))

    }
