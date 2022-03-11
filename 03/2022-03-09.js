var condicion=null;
if(condicion){
    console.log("Se ejecuta la función");
}
console.log("Ya no hay condicional");

var condicion=true;
if(condicion){
    console.log("Se ejecuta la función");
}
console.log("Ya no hay condicional");


//Si es mayor de edad, puede entrar a la disco
//Si se llama Mario y es mayor de edad, entra a VIP
var condicion=true;
var nombre="mario";
var edad=12;
if(nombre === "mario"&&edad>=18){
    console.log("Puedes entrar a la discoteca y en la sala VIP");
}else if(edad>=18){
    console.log("Puedes entrar a la discoteca");
}else{
    console.log("No puedes entrar, porque no eres mayor de edad");
}


