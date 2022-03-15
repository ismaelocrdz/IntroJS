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

//Ejercicio 04
var animals01=['eagle','parrot','monkey','boar','lion'];
animals01.shift('eagle');
console.log(animals01);