export { }

let list1 = [1, 2, 3, 4];
let list2 = [];
let nomes = ['MARIA', 'JOAO', 'ANABELA'];

// --------------------------------------------------------------------------------------------------------------------
// map: aplica uma função a cada elemento da coleção original, retornando uma nova coleção com os elementos alterados

function double(x: number):number {
    return x * 2;
}

function triple(x: number):number {
    return x * 3;
}

let m1 = list1.map(double);

console.log(m1);
