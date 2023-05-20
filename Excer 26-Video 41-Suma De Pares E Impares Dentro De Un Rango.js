// Ejercicio: Se desea calcular independientemente la suma de los n�meros pares e impares
// comprendidos entre 1 y 50.
// (Diagrama De Flujo):
function ciclo() {
	var suma_pares = new Number();
	var suma_impares = new Number();
	var i = new Number();
	suma_pares = 0;
	suma_impares = 0;
	for (i=2;i<=49;i++) {
		if (i%2==0) {
			suma_pares = suma_pares+i;
		} else {
			suma_impares = suma_impares+i;
		}
	}
	document.write("La suma de pares es:",suma_pares,'<BR/>');
	document.write("La suma de impares es:",suma_impares,'<BR/>');
}

