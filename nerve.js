alert ("Olá! Bem vindo á CalBase");

var v1;
var v2;
var v3;
var v4;
var div = 4;
var r = document.getElementById('resultado');

function somar() {
    v1 = document.getElementsByTagName('input')[0];
    v2 = document.getElementsByTagName('input')[1];
    v3 = document.getElementsByTagName('input')[2];
    v4 = document.getElementsByTagName('input')[3];
    var valor = parseFloat(v1.value) + parseFloat(v2.value) + 
    parseFloat(v3.value) + parseFloat(v4.value)
    r.innerHTML = 'Resultado: ' + valor;
}

function subtrair() {
    v1 = document.getElementsByTagName('input')[0];
    v2 = document.getElementsByTagName('input')[1];
    v3 = document.getElementsByTagName('input')[2];
    v4 = document.getElementsByTagName('input')[3];
    var valor = parseFloat(v1.value) - parseFloat(v2.value) -
    parseFloat(v3.value) - parseFloat(v4.value)
    r.innerHTML = 'Resultado: ' + valor;
}

function multiplicar() {
    v1 = document.getElementsByTagName('input')[0];
    v2 = document.getElementsByTagName('input')[1];
    v3 = document.getElementsByTagName('input')[2];
    v4 = document.getElementsByTagName('input')[3];
    var valor = parseFloat(v1.value) * parseFloat(v2.value) *
    parseFloat(v3.value) * parseFloat(v4.value)
    r.innerHTML = 'Resultado: ' + valor;
}

function dividir() {
    v1 = document.getElementsByTagName('input')[0];
    v2 = document.getElementsByTagName('input')[1];
    v3 = document.getElementsByTagName('input')[2];
    v4 = document.getElementsByTagName('input')[3];
    var valor = parseFloat(v1.value) / parseFloat(v2.value) /
    parseFloat(v3.value) / parseFloat(v4.value)
    r.innerHTML = 'Resultado: ' + valor;
}

function media() {
    v1 = document.getElementsByTagName('input')[0];
    v2 = document.getElementsByTagName('input')[1];
    v3 = document.getElementsByTagName('input')[2];
    v4 = document.getElementsByTagName('input')[3];
    var valor = parseFloat(v1.value) + parseFloat(v2.value) + 
    parseFloat(v3.value) + parseFloat(v4.value)
    var media = valor / 4;
    r.innerHTML = 'Resultado: ' + media;
}




