var numero1 = 0;
var numero2 = 0;
var operacion;

window.onload=function(){

document.getElementById('1').addEventListener("click", function(){escucharNumeros("1");});
document.getElementById('2').addEventListener("click", function(){escucharNumeros("2");});
document.getElementById('3').addEventListener("click", function(){escucharNumeros("3");});
document.getElementById('4').addEventListener("click", function(){escucharNumeros("4");});
document.getElementById('5').addEventListener("click", function(){escucharNumeros("5");});
document.getElementById('6').addEventListener("click", function(){escucharNumeros("6");});
document.getElementById('7').addEventListener("click", function(){escucharNumeros("7");});
document.getElementById('8').addEventListener("click", function(){escucharNumeros("8");});
document.getElementById('9').addEventListener("click", function(){escucharNumeros("9");});
document.getElementById('0').addEventListener("click", function(){escucharNumeros("0");});
document.getElementById('.').addEventListener("click", function(){escucharNumeros(".");});
document.getElementById('+').addEventListener("click", function(){operaciones("+");});
document.getElementById('-').addEventListener("click", function(){operaciones("-");});
document.getElementById('*').addEventListener("click", function(){operaciones("*");});
document.getElementById('/').addEventListener("click", function(){operaciones("/");});
document.getElementById('=').addEventListener("click", function(){funcionIgual();});
document.getElementById('C').addEventListener("click", function(){botonC();});
}

function botonC(){
	numero1 = 0;
	numero2 = 0;
	document.getElementById("inputEntrada").value = 0;
}


function escucharNumeros(numero){


	if(document.getElementById('inputEntrada').value == "0" || numero1 == 0){

		numero1 = numero;

    }else{

        numero1 += numero;
    }
        document.getElementById("inputEntrada").value = numero1;

}

function operaciones(signo){

	if(numero1 != 0){
	numero2 = parseFloat(numero1);
	numero1 = 0;
	}

	operacion = signo;

}

function funcionIgual(){

    numero1 = parseFloat(numero1);
	switch (operacion){
		case "+":
			numero1 += numero2;
		break;
		case "-":
			numero1 = numero2 - numero1;
		break;
		case "*":
			numero1 *= numero2;
		break;
		case "/":
			numero1 = numero2 / numero1;
		break;
		case "%":
			numero1 = (numero2 * 100)/numero1;
		break;
		case "raiz":
			numero1 = numero2 / numero1;
		break;
	}
	document.getElementById("inputEntrada").value = numero1;
	numero2 = parseFloat(numero1);
}

