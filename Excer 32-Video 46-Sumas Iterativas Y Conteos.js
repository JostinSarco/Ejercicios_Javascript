// Ejercicio: Ingresar "N" enteros, visualizar la suma de los n�meros pares
// de la lista, cu�ntos n�meros pares existen y cu�l es el promedio de los 
// n�meros impares
function ejercicio() {
	var num_elementos = new Number();
	var i = new Number();
	var num = new Number();
	var suma_pares = new Number();
	var conteo_pares = new Number();
	var suma_impares = new Number();
	var conteo_impares = new Number();
	var promedio_impares = new Number();
	document.write("Digite la cantidad de elementos a ingresar:",'<BR/>');
	num_elementos = Number(prompt());
	i = 1;
	suma_pares = 0;
	conteo_pares = 0;
	suma_impares = 0;
	conteo_impares = 0;
	while (i<=num_elementos) {
		document.write(i,".Digite un numero:",'<BR/>');
		num = Number(prompt());
		if (num%2==0) {
			// El num es par
			// Suma iterativa de pares
			suma_pares = suma_pares+num;
			// Conteo de pares
			conteo_pares = conteo_pares+1;
		} else {
			// El numero es impar
			// Suma iterativa de impares
			suma_impares = suma_impares+num;
			// Conteo de impares
			conteo_impares = conteo_impares+1;
		}
		i = i+1;
	}
	if (conteo_pares==0) {
		document.write("No se han digitado n�meros pares",'<BR/>');
	} else {
		document.write("La suma de los numeros pares es:",suma_pares,'<BR/>');
		document.write("El conteo de numeros pares es:",conteo_pares,'<BR/>');
	}
	if (conteo_impares==0) {
		document.write("No se han digitado numeros impares:",'<BR/>');
	} else {
		promedio_impares = suma_impares/conteo_impares;
		document.write("El promedio de impares es:",promedio_impares,'<BR/>');
	}
}

