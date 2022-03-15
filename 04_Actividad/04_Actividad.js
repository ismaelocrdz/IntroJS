//Ejercicio 01 
var Num=Number(prompt("Ingresa un número:"));
var cont=0;
while(cont<=Num){
    cont=cont+1
    if(cont%5===0)
    console.log(Number(cont));    
}

//Ejercicio 02
var Num=Number(prompt("Ingresa un número:"));
var cont=0;
do{ 
    cont=cont+1   
    if(cont%5===0)    
    console.log(Number(cont));
}
while(cont<Num)

//Ejercicio 03
for (let Num= 1; Num <= 50; Num = Num + 2) {
    console.log(Num);
    }