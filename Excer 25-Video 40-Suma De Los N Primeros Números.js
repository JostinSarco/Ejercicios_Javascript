// Calcular la suma de los "N" primeros n�meros.
// (Pseudoc�digo)
function ciclo() {
	var n = new Number();
	var suma = new Number();
	var i = new Number();
	document.write("Digite la cantidad de numeros a sumarse:",'<BR/>');
	n = Number(prompt());
	suma = 0;
	for (i=1;i<=n;i++) {
		suma = suma+i;
	}
	document.write("La suma es: ",suma,'<BR/>');
}

