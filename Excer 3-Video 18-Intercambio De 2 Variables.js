// Ejercicio 3: Intercambio de 2 Variables
function principal() {
	var a = new Number();
	var b = new Number();
	var aux = new Number();
	document.write("Digite el valor de A:",'<BR/>');
	a = Number(prompt());
	document.write("Digite el valor de B:",'<BR/>');
	b = Number(prompt());
	aux = a;
	a = b;
	b = aux;
	document.write("El nuevo valor de A es:",a,'<BR/>');
	document.write("El nuevo valor de B es:",b,'<BR/>');
}

