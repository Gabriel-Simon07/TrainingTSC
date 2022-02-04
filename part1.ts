export {};

let list1 = [1, 2, 3, 4];
let list2 = [];
let nomes = ["MARIA", "JOAO", "ANABELA"];
let listLetters: string[] = ["G", "A", "B", "J"];

// --------------------------------------------------------------------------------------------------------------------
// map: aplica uma função a cada elemento da coleção original, retornando uma nova coleção com os elementos alterados

function double(x: number): number {
  return x * 2;
}

function triple(x: number): number {
  return x * 3;
}

let m1 = list1.map(double);
let m2 = list1.map(triple);
let m3 = list1.map((x) => x * 4);

console.log("MAP Results ------------------------------");
console.log(m1);
console.log(m2);
console.log(m3);

// --------------------------------------------------------------------------------------------------------------------
// filter: retorna uma nova coleção contendo apenas aqueles elementos da coleção original que satisfazem um dado predicado

function pair(x: number): boolean {
  return x % 2 == 0;
}

function startWithA(letter: string): boolean {
  return letter == "A";
}

console.log("FILTER Results ------------------------------");
console.log(list1.map(pair));
console.log(listLetters.map(startWithA));
console.log(listLetters.filter((letter) => letter == "A"));
console.log(list1.map((pair) => pair % 2 == 0));
console.log(list1.filter((number) => number % 2 != 0));
console.log(list1.filter((number) => number > 2));

// --------------------------------------------------------------------------------------------------------------------
// reduce: aplica cumulativamente uma função aos elementos de uma coleção, retornando o resultado final.
// * você pode informar, opcionalmente, um valor inicial como parâmetro (necessário para coleção vazia).

function sum(x: number, y: number): number {
    return x + y;
}

function multiply(x: number, y: number): number {
    return x * y;
}

console.log("REDUCE Results ------------------------------");

console.log(list1.reduce(sum));

console.log(list2.reduce(sum, 1));

console.log(list1.reduce(multiply));

// --------------------------------------------------------------------------------------------------------------------
// sort: ordena a coleção conforme a função de comparação informada como parâmetro





