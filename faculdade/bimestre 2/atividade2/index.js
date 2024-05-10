function dataMaior() {

    if (verificaCampos()) {


        let data1 = new Date(document.getElementById('data1').value)
        let data2 = new Date(document.getElementById('data2').value)

        if (data1 > data2) {
            let texto = document.getElementById('resultado')
            texto.innerHTML = "A data 1 é maior";
            return data1
        } else if (data2 > data1) {
            let texto = document.getElementById('resultado')
            texto.innerHTML = "A data 2 é maior";
            return data2
        } else {
            let texto = document.getElementById('resultado')
            texto.innerHTML = "Data 1 e Data 2 são iguais";
            return null;
        }
    }

}

function difData() {
    let data1 = new Date(document.getElementById('data1').value)
    let data2 = new Date(document.getElementById('data2').value)

    if (verificaCampos() && data1 < data2) {
        let diferencaDias = (data2 - data1) / (1000 * 60 * 60 * 24) // essa multiplicação representa a os milesimos , segundos, minutos e horas

        let texto = document.getElementById('resultado')
        texto.innerHTML = `A diferença entre a Data 1 e a Data 2 é de ${diferencaDias} dia(s)`;
        return diferencaDias;

    } else {
        alert('Data 1 precisa ser menor que Data 2');
    }
}

function dataAgora() {
    let agora = new Date();

    let texto = document.getElementById('resultado');
    texto.innerHTML = `A data de agora é ${agora.getHours()}:${agora.getMinutes()} - ${agora.getDate()}/${agora.getMonth() + 1}/${agora.getFullYear()}`;
}


function verificaCampos() {
    let data1 = document.getElementById('data1').value;
    let data2 = document.getElementById('data2').value;

    if (data1 === "" || data2 === "") {
        alert('Por favor, preencha ambos os campos de data.');
        return false;
    }

    return true;
}

