
// document.createElement  ( cria um elemento HTML )
// innerHTML ( define ou obtém a sintaxe HTML descrevendo os elementos descendentes )


// document.getElementById  ( recupera algum elemento )

let listaCompras = [];
let indiceEdicao = -1;

function limpaCampos() {
    document.getElementById('item').value = '';
    document.getElementById('valor').value = '';
}

function salvar() {

    let item = document.getElementById('item').value;
    let valor = document.getElementById('valor').value;


    if (indiceEdicao >= 0) {
        let obj = listaCompras[indiceEdicao];
        obj.item = item;
        obj.valor = valor;
    } else {
        listaCompras.push(
            { 'item': item, 'valor': valor }
        )
    }

   let total = calcularTotal();
   console.log(total)


    console.log(listaCompras);

    limpaCampos();

    atualizaTabela();

}

function calcularTotal(lista) {
    let valor = 0;
    for( let i = 0; i<listaCompras.length ; i++){
        valor += listaCompras[i].valor;
    }
    return valor;

    
}


function editarItem(i) {
    indiceEdicao = i;
    salvar();
    atualizaTabela();
}

function excluirItem(i) {
    listaCompras.splice(i, 1);
    atualizaTabela();
}

function atualizaTabela() {
    let corpoTabela = document.getElementById('table-body');
    corpoTabela.innerHTML = '';

    listaCompras.forEach((item, index) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.item}</td>
            <td>R$ ${item.valor}</td>
            <td>
                <button type="button" 
                    onclick="editarItem(${index})"    
                    class="material-symbols-outlined btn-icone">edit
                </button>
                <button type="button" 
                    onclick="excluirItem(${index})" 
                    class="material-symbols-outlined btn-icone">remove
                </button>
            </td>
        `;
        corpoTabela.append(tr);
    });
}