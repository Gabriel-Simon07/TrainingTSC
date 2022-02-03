"use strict";
exports.__esModule = true;
var list1 = [1, 2, 3, 4];
var list2 = [];
var nomes = ['MARIA', 'JOAO', 'ANABELA'];
// --------------------------------------------------------------------------------------------------------------------
// map: aplica uma função a cada elemento da coleção original, retornando uma nova coleção com os elementos alterados
function double(x) {
    return x * 2;
}
function triple(x) {
    return x * 3;
}
var m1 = list1.map(double);
console.log(m1);
