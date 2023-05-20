// Ejercicio 2: Hacer un programa para ingresar el radio de un circulo y se
// reporte su �rea y la longitud de la circunferencia.
// �rea = pi * radio^2
// Longitud = 2 * pi * radio
function ejercicio() {
	var pi;
	var radio = new Number();
	var area = new Number();
	var long = new Number();
	document.write("Digite el valor del radio:",'<BR/>');
	radio = Number(prompt());
	area = Math.PI*Math.pow(radio,2);
	long = 2*Math.PI*radio;
	document.write("El area de la circunferencia es:",area,'<BR/>');
	document.write("La longitud es:",long,'<BR/>');
}

