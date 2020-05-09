//Defino Variables
var operacion;
var valora;
var valorb;git

function init(){
	//variables a llamar
	var display = document.getElementById("display");
	var on = document.getElementById("on");
	var sign = document.getElementById("sign");
	var raiz = document.getElementById("raiz");
	var dividido = document.getElementById("dividido");
	var mas = document.getElementById("mas");
	var menos = document.getElementById("menos");
	var por = document.getElementById("por");
	var igual = document.getElementById("igual");
	var punto = document.getElementById("punto");
	var nueve = document.getElementById("nueve");
	var ocho = document.getElementById("ocho");
	var siete = document.getElementById("siete");
	var seis = document.getElementById("seis");
	var cinco = document.getElementById("cinco");
	var cuatro = document.getElementById("cuatro");
	var tres = document.getElementById("tres");
	var dos = document.getElementById("dos");
	var uno = document.getElementById("uno");
	var cero = document.getElementById("cero");
	var punto = document.getElementById("punto");
	

	//Eventos click en numeros
	uno.onclick = function(e){
		if (display.textContent.length <8){
		  if (display.textContent === "0"){
		  			  display.innerHTML = "1";
		  }else{
				display.textContent = display.textContent + "1";				
			}			
		}			
	}
	dos.onclick = function(e){
		if (display.textContent.length <8){
		  if (display.textContent === "0"){
			  display.innerHTML = "2";
		}else{
				display.textContent = display.textContent + "2";				
			}
		}			
	}
	tres.onclick = function(e){
		if (display.textContent.length <8){
		  if (display.textContent === "0"){
			  display.innerHTML = "3";
		}else{
				display.textContent = display.textContent + "3";				
			}
		}			
	}
	cuatro.onclick = function(e){
		if (display.textContent.length <8){
		  if (display.textContent === "0"){
			  display.innerHTML = "4";
		}else{
				display.textContent = display.textContent + "4";				
			}
		}			
	}	
	cinco.onclick = function(e){
		if (display.textContent.length <8){
		  if (display.textContent === "0"){
			  display.innerHTML = "5";
		}else{
				display.textContent = display.textContent + "5";				
			}
		}			
	}
	seis.onclick = function(e){
		if (display.textContent.length <8){
		  if (display.textContent === "0"){
			  display.innerHTML = "6";
		}else{
				display.textContent = display.textContent + "6";				
			}
		}			
	}
	siete.onclick = function(e){
		if (display.textContent.length <8){
		  if (display.textContent === "0"){
			  display.innerHTML = "7";
		}else{
				display.textContent = display.textContent + "7";				
			}
		}			
	}
	ocho.onclick = function(e){
		if (display.textContent.length <8){
		  if (display.textContent === "0"){
			  display.innerHTML = "8";
		}else{
				display.textContent = display.textContent + "8";				
			}
		}			
	}
	nueve.onclick = function(e){
		if (display.textContent.length <8){
		  if (display.textContent === "0"){
			  display.innerHTML = "9";
		}else{
				display.textContent = display.textContent + "9";				
			}
		}			
	}
	cero.onclick = function(e){
		if (display.textContent.length <8){
		  if (display.textContent === "0"){
			  display.innerHTML = "0";
		}else{
				display.textContent = display.textContent + "0";				
			}
		}			
	}

	//Eventos Click de operaciones
	on.onclick = function(e){
		resetear();
	}
	mas.onclick = function(e){
		valora = display.textContent;
		operacion = "+";
		limpiar();
	}
	menos.onclick = function(e){
		valora = display.textContent;
		operacion = "-";
		limpiar();
	}
	por.onclick = function(e){
		valora = display.textContent;
		operacion = "*";
		limpiar();
	}
	dividido.onclick = function(e){
		valora = display.textContent;
		operacion = "/";
		limpiar();
	}
	igual.onclick = function(e){
		valorb = display.textContent;
		resolver();
	}
	sign.onclick = function(e){
		agregarsigno();
	}
	punto.onclick = function(e){
		validarPunto();
	}

	//Eventos para el aspecto de Teclas
	uno.onmousedown = function(){reducetamaño3(uno);}
	uno.onmouseup = function(){tamañonormal3(uno);}

	dos.onmousedown = function(){reducetamaño3(dos);}
	dos.onmouseup = function(){tamañonormal3(dos);}

	tres.onmousedown = function(){reducetamaño3(tres);}
	tres.onmouseup = function(){tamañonormal3(tres);}

	cuatro.onmousedown = function(){reducetamaño(cuatro);}
	cuatro.onmouseup = function(){tamañonormal(cuatro);}

	cinco.onmousedown = function(){reducetamaño(cinco);}
	cinco.onmouseup = function(){tamañonormal(cinco);}

	seis.onmousedown = function(){reducetamaño(seis);}
	seis.onmouseup = function(){tamañonormal(seis);}

	siete.onmousedown = function(){reducetamaño(siete);}
	siete.onmouseup = function(){tamañonormal(siete);}

	ocho.onmousedown = function(){reducetamaño(ocho);}
	ocho.onmouseup = function(){tamañonormal(ocho);}

	nueve.onmousedown = function(){reducetamaño(nueve);}
	nueve.onmouseup = function(){tamañonormal(nueve);}

	cero.onmousedown = function(){reducetamaño3(cero);}
	cero.onmouseup = function(){tamañonormal3(cero);}

	mas.onmousedown = function(){reducetamaño2(mas);}
	mas.onmouseup = function(){tamañonormal2(mas);}

	menos.onmousedown = function(){reducetamaño(menos);}
	menos.onmouseup = function(){tamañonormal(menos);}

	por.onmousedown = function(){reducetamaño(por);}
	por.onmouseup = function(){tamañonormal(por);}

	dividido.onmousedown = function(){reducetamaño(dividido);}
	dividido.onmouseup = function(){tamañonormal(dividido);}

	sign.onmousedown = function(){reducetamaño(sign);}
	sign.onmouseup = function(){tamañonormal(sign);}

	igual.onmousedown = function(){reducetamaño3(igual);}
	igual.onmouseup = function(){tamañonormal3(igual);}

	punto.onmousedown = function(){reducetamaño3(punto);}
	punto.onmouseup = function(){tamañonormal3(punto);}

	on.onmousedown = function(){reducetamaño(on);}
	on.onmouseup = function(){tamañonormal(on);}

}

//Funciones 
function limpiar(){ //Limpia display al click de la Operacion
	display.textContent = "";
}
function resetear(){ //Funcion del ON vuelve al cero
	display.textContent = 0;
	valora = 0;
	valorb = 0;
	operacion = "";
}
function agregarsigno(){
	var  cadena = display.innerText;

    if(cadena.indexOf('-') == -1){
      //console.log('valor de cero: ' + cadena.indexOf('0'));

    /*Si el numero es diferente a cero nos permite*/
       if(cadena.indexOf('0') != 0){
         cadena = '-' + cadena;
           display.innerHTML  = cadena;
       }
    }
    else{
       /*SI el signo ya existe '-' lo quita*/
        cadena = cadena.replace("-", "");
        display.innerHTML  = cadena;
   }

   display.innerHTML = display.innerText.substring(0,7);
}

function validarPunto(){ //Funcion del onclick tecla Punto
    if(display.innerHTML.indexOf(".")==-1){
       display.innerHTML += "."
    }
}

function resolver(){//Funcion para resolver operacion
	var res = 0;
	
	switch(operacion){
		case "+":
		res = parseFloat(valora) + parseFloat(valorb);
		break;
		
		case "-":
		res = parseFloat(valora) - parseFloat(valorb);
		break;

		case "*":
		res = parseFloat(valora) * parseFloat(valorb);
		break;

		case "/":
		res = parseFloat(valora) / parseFloat(valorb);
		break; 
	}
	resetear();	
	if(String(res).length > 8){
       display.innerHTML = parseFloat(res).toPrecision(5);
    }else{
       display.innerHTML = res;
    }
}
function reducetamaño(elemento){
	elemento.style.width = "19.3%";
    elemento.style.height = "15.3%";
    elemento.style.margin = "3.9px";

}
function tamañonormal(elemento){
	elemento.style.width = "20.3%";
    elemento.style.height = "16.5%";
    elemento.style.margin = "2px";
}
function reducetamaño2(elemento){
    elemento.style.width = "90%";
    elemento.style.height = "90%";
}
function tamañonormal2(elemento){
    elemento.style.width = "100%";
    elemento.style.height = "100%";
}
function reducetamaño3(elemento){
    elemento.style.width = "25%";
    elemento.style.height = "37%";
    elemento.style.margin = "3.9px";
}
function tamañonormal3(elemento){
    elemento.style.width = "27%";
    elemento.style.height = "40%";
    elemento.style.margin = "2px";
}