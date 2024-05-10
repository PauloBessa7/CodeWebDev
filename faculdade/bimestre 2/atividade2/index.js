function dataMaior(data1, data2) {
    if (data1 > data2) {
        return data1;
    } else if (data2 > data1) {
        return data2;
    } else {
        return false;
    }
}

function calcData(data1, data2) {
    if (data1 > data2) {
        return false;
    } else {
        return Math.abs((data2 - data1) / (1000 * 60 * 60 * 24)); // Retorna a diferença em dias
    }
}

function dataHoje() {
    let hoje = new Date();
    let hojeFormat = hoje.getHours() + ':' + hoje.getMinutes() + ' - ' + hoje.getDate() + '/' + (hoje.getMonth() + 1) + '/' + hoje.getFullYear();
    return hojeFormat;
}

let data1 = new Date("2005-02-22");
let data2 = new Date("2005-08-22");

console.log(dataMaior(data1, data2));
console.log(calcData(data1, data2));
console.log(dataHoje());