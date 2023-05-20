function ejercicio() {
	var a = new Number();
	var b = new Number();
	var c = new Number();
	var resultado = new Number();
	document.write("Digite el valor de A:",'<BR/>');
	a = Number(prompt());
	document.write("Digite el valor de B:",'<BR/>');
	b = Number(prompt());
	document.write("Digite el valor de C:",'<BR/>');
	c = Number(prompt());
	resultado = (-b+Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
	document.write("El resultado es:",resultado,'<BR/>');
}

