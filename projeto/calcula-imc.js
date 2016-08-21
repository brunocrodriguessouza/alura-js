//calcula-imc.js

function montaPaciente(pacienteTr){

	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0]; 
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0]; 
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

    var paciente = { 
        nome : tdNome.textContent, 
        peso : tdPeso.textContent, 
        altura : tdAltura.textContent,
        pegaImc: function() { //definindo a função já na declaração do objeto!

            if(this.altura != 0){
                var imc = this.peso / (this.altura * this.altura);
                return imc;
            } else{

                console("Não posso dividir por zero!");
            }
        }
    };    
   return paciente;
}


var trsPacientes = document.getElementsByClassName("paciente");

for(var posicaoAtual = 0; posicaoAtual <= trsPacientes.length - 1; posicaoAtual++){

    var pacienteTr = trsPacientes[posicaoAtual];

    var tdImc = pacienteTr.getElementsByClassName("info-imc")[0]; 
    var pacienteAtual = montaPaciente(pacienteTr); //Aqui chamamos a nova funcao

    var imc = pacienteAtual.pegaImc();
    tdImc.textContent = imc;

    console.log(imc); 
}

