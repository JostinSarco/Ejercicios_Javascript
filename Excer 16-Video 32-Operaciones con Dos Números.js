// Leer 2 n�meros;si son iguales que los multiplique, si el
// primero es mayor que el segundo que los reste y si no que los sume.(Pseudoc�digo)
function ejercicio() {
	var num1 = new Number();
	var num2 = new Number();
	var resultado = new Number();
	document.write("Digite dos numeros:",'<BR/>');
	num1 = Number(prompt());
	num2 = Number(prompt());
	if (num1==num2) {
		// Si son iguales multiplicamos
		resultado = num1*num2;
	} else {
		if (num1>num2) {
			// Si el primer n�mero es mayor restamos.
			resultado = num1-num2;
			// Si el primero no es mayor que los sume.
		} else {
			resultado = num1+num2;
			document.write("El rsultado es:",resultado,'<BR/>');
		}
	}
}

