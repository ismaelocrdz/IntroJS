var Num01=Number(prompt("Ingresa un número:"))
if(Num01%2===0){
    console.log(Num01 + " es divisible entre 2");
}else {
    console.log(Num01 + " no es divisible entre 2");
}

var Num01=Number(prompt("Ingresa un número:"))
if(Num01%2===0){
    window.alert(Num01 + " es un número par");
}else {
    window.alert(Num01 + " no es un número par");
}

var Num01=Number(prompt("Ingresa un número:"))
if(Num01===1000){
    window.alert("¡Felicidades! Haz ganado un premio");
}else {
    window.alert("Sigue participando");
}

var Num01=Number(prompt("Ingresa un número:"))
var Num02=Number(prompt("Ingresa otro número:"))
if(Num01!==Num02&&Num01<Num02){
    console.log(Num01 +" es menor que " + Num02);
}


var Num01=Number(prompt("Ingresa un número:"))
var Num02=Number(prompt("Ingresa otro número:"))
var Num03=Number(prompt("Ingresa un número más:"))
if(Num01!==Num02&&Num01>Num02){
    prompt(Num01 + " es mayor que " + Num02)       
}else if(Num01!==Num03&&Num01>Num03){
    prompt(Num01 + " es el mayor de los números") 
}else if(Num01===Num02){
    prompt(Num01 + " es igual al " + Num02) 
}else if(Num03>Num01){
            prompt(Num03 + " es el mayor de los tres números")}
            else if(Num01&&Num02){    
                prompt(Num01 + Num02 +" son mayores que el número " + Num03)            
            }
            else if(Num02===Num03){
                    prompt(Num02 + " es el mayor de los tres números")
                }else{
                prompt(Num03 + " es el mayor de los tres números")
            }
        




var Num01=Number(prompt("Ingresa un número:"))
var Num02=Number(prompt("Ingresa otro número:"))
var Num03=Number(prompt("Ingresa un número más:"))
if(Num01!==Num02&&Num01>Num02&&Num01>Num03){
    prompt(Num01 +" es el número mayor ")
}else if(Num02!==Num03&&Num02>Num01&&Num02>Num03){
    prompt(Num02 +" es el número mayor ")
}else if(Num02!==Num03&&Num02<Num01&&Num02<Num03){
    prompt(Num03 +" es el número mayor ")    
    }else if(Num02===Num03&&Num01>Num03){
        prompt(Num01 +" es el número mayor")
    }else if(Num02===Num03&&Num03<Num01){
        prompt(Num01 +" es el número mayor")
    }else if(Num02===Num03&&Num01>Num03){
        prompt(Num01 +" es el número mayor")
    }else if(Num01===Num03&&Num03<Num02){
        prompt(Num02 + " es el número mayor")
    }else if(Num01===Num02&&Num02<Num03){
        prompt(Num03 + " es el número mayor")
    }





/****/

var Num01 = Number(prompt("Ingresa el primer número:"))
var Num02 = Number(prompt("Ingresa el segundo número:"))
var Num03 = Number(prompt("Ingresa el tercer número:"))
if (Num01 !== Num02 && Num01 !== Num03 && Num01 > Num02 && Num01 > Num03) {
    prompt(Num01, " es el número mayor ")
} else if (Num02 !== Num03 && Num02 > Num01 && Num02 > Num03) {
    prompt(Num02, " es el número mayor ")
} else if (Num01 === Num02 && Num02 > Num03) {
    prompt(Num01, "y", Num02, " son iguales y mayores que el número ", Num03)
} else if (Num01 === Num02 && Num02 < Num03) {
    prompt(Num03, " es mayor que los números ", Num01, "y", Num02, " que son iguales")
} else if (Num01 === Num03 && Num03 > Num02) {
    prompt(Num01, "y", Num03, " son iguales y son mayores que el número ", Num02)
} else (Num01 === Num03 && Num03 < Num02) {
    prompt(Num02, " es mayor que los números ", Num01, "y", Num03, " que son iguales")
} 


var Num01 = Number(prompt("Ingresa el primer número:"))
var Num02 = Number(prompt("Ingresa el segundo número:"))
var Num03 = Number(prompt("Ingresa el tercer número:"))
if (Num01 !== Num02 && Num01 !== Num03 && Num01 > Num02 && Num01 > Num03) {
    console.log(Num01, " es el número mayor ")
} else if (Num02 !== Num03 && Num02 > Num01 && Num02 > Num03) {
    console.log(Num02, " es el número mayor ")
} else if (Num01 === Num02 && Num02 > Num03) {
    console.log(Num02, "y", Num01, "son iguales y mayores que el número ", Num03)
}else if (Num01 === Num02 && Num02 < Num03) {
    console.log(Num03, " es mayor que los números ", Num01, "y", Num02, " que son iguales")
} else if (Num01 === Num03 && Num03 > Num02) {
    console.log(Num01, "y", Num03, " son iguales y son mayores que el número ", Num02)
} else {
    console.log(" Parece ser que no hay más combinaciones  ")
}










