// Leer tres n�meros diferentes e imprimir el n�mero mayor de los tres. (Diagrama De Flujo).
function ejercicio() {
	var num1 = new Number();
	var num2 = new Number();
	var num3 = new Number();
	document.write("Digite tres numeros:",'<BR/>');
	num1 = Number(prompt());
	num2 = Number(prompt());
	num3 = Number(prompt());
	if (num1>num2 && num1>num3) {
		document.write("El mayor es:",num1,'<BR/>');
	} else {
		if (num2>num1 && num2>num3) {
			document.write("El mayor es :",num2,'<BR/>');
		} else {
			document.write("El mayor es:",num3,'<BR/>');
		}
	}
}

