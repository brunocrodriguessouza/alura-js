tdPeso1 = document.getElementById("peso-1");
tdPeso1 = document.getElementById("altura-1");

tdPeso2 = document.getElementById("peso-2");
tdAltura2 = document.getElementById("altura-2");

//calcula-imc.js
var peso = tdPeso2.textContent;
var altura = tdAltura2.textContent;

if(altura != 0){
    var imc = peso / (altura * altura); //25

    tdImc = document.getElementById("imc-2");
    tdImc.textContent = imc;

    console.log(imc);
} else{
    console.log("Não posso executar uma divisão por 0!");
}