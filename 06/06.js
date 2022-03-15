//Ejercicio 01
var animals01=["eagle","parrot","monkey","boar","lion"];
var animals02=["panter", "dragon", "turtle"];
const animals03=animals01.concat(animals02);
console.log(animals03);

//Ejercicio 02
const numeros = [4,6,1,0,8,2];
numeros.sort(function(a, b){return b - a});

//Ejercicio 03
var animals01=['eagle','parrot','monkey','boar','lion'];
animals01.push('cow');
console.log(animals01);

var animals01=['eagle','parrot','monkey','boar','lion'];
animals01.shift('eagle');
console.log(animals01);


const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad.push('🥜');

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);