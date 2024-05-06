function verifica() {
    let telefoneRegex = /^\(?[0-9]{2}\)? ?[0-9]{4,5}-[0-9]{4}$/;
    let numeroTelefone = document.getElementById('telefone').value;

    let emailRegex = /^[^\s@]+@gmail\.com$/;
    let email = document.getElementById('email').value;

    let nomeRegex = /^[A-Za-z\s]{1,100}$/;
    let nome = document.getElementById('nome').value; 

    let verificado = 0;

    if (!telefoneRegex.test(numeroTelefone)) {
        console.log("Número de telefone inválido.");
        document.getElementById('telefone').value = ''; 
        verificado++;
    }

    if (!emailRegex.test(email)) {
        console.log("Email inválido.");
        document.getElementById('email').value = ''; 
        verificado++;
    }

    if (!nomeRegex.test(nome)) { 
        console.log("Nome inválido.");
        document.getElementById('nome').value = ''; 
        verificado++;
    }

    if(verificado === 0){ 
        alert("Está tudo certo");
    }
}
