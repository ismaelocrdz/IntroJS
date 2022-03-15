const numeros = [3, 23, 12];
numeros.sort(function(a, b){return a - b});

const numeros = [1,4,6,10,22,55,46,2,5,0];
numeros.sort(function(a, b){return a - b});

var arr=[1,4,6,10,22,55,46,2,5,0];
var arr01=arr.sort(function(a, b){return a - b})
for(var a=0;a<arr01.length; a=a+1){
    if (arr01[a]>3)console.log(arr01[a]);
}