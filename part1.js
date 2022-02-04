"use strict";
exports.__esModule = true;
var list1 = [1, 2, 3, 4];
var list2 = [];
var nomes = ["MARIA", "JOAO", "ANABELA"];
var listLetters = ["G", "A", "B", "J"];
// --------------------------------------------------------------------------------------------------------------------
// map: aplica uma função a cada elemento da coleção original, retornando uma nova coleção com os elementos alterados
function double(x) {
    return x * 2;
}
function triple(x) {
    return x * 3;
}
var m1 = list1.map(double);
var m2 = list1.map(triple);
var m3 = list1.map(function (x) { return x * 4; });
console.log("MAP Results ------------------------------");
console.log(m1);
console.log(m2);
console.log(m3);
// --------------------------------------------------------------------------------------------------------------------
// filter: retorna uma nova coleção contendo apenas aqueles elementos da coleção original que satisfazem um dado predicado
function pair(x) {
    return x % 2 == 0;
}
function startWithA(letter) {
    return letter == "A";
}
console.log("FILTER Results ------------------------------");
console.log(list1.map(pair));
console.log(listLetters.map(startWithA));
console.log(listLetters.filter(function (letter) { return letter == "A"; }));
console.log(list1.map(function (pair) { return pair % 2 == 0; }));
console.log(list1.filter(function (number) { return number % 2 != 0; }));
console.log(list1.filter(function (number) { return number > 2; }));
// --------------------------------------------------------------------------------------------------------------------
// reduce: aplica cumulativamente uma função aos elementos de uma coleção, retornando o resultado final.
// * você pode informar, opcionalmente, um valor inicial como parâmetro (necessário para coleção vazia).
function sum(x, y) {
    return x + y;
}
function multiply(x, y) {
    return x * y;
}
console.log("REDUCE Results ------------------------------");
console.log(list1.reduce(sum));
console.log(list2.reduce(sum, 1));
console.log(list1.reduce(multiply));
// --------------------------------------------------------------------------------------------------------------------
// sort: ordena a coleção conforme a função de comparação informada como parâmetro
