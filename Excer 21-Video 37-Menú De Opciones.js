// Hacer un programa que tenga un men� con las siguientes 
// opciones:
// Opci�n 1: Elevar un n�mero a una potencia X.
// Opci�n 2: Sacar la ra�z cuadrada de un n�mero.
// Opci�n 3: Salir.
// Diagrama N-S
function ejercicio() {
	var opcion = new Number();
	document.write("MEN�",'<BR/>');
	document.write("1. Elevar un numero a una potencia X",'<BR/>');
	document.write("2. Sacar la raiz cuadrada de un numero",'<BR/>');
	document.write("3. Salir",'<BR/>');
	document.write("Digite una opcion:",'<BR/>');
	opcion = Number(prompt());
	switch (opcion) {
	case 1:
		var num = new Number();
		var potencia = new Number();
		var resultado = new Number();
		document.write("Digite un numero:",'<BR/>');
		num = Number(prompt());
		document.write("Digite la potencia",'<BR/>');
		potencia = Number(prompt());
		resultado = Math.pow(num,potencia);
		document.write("El resultado es:",resultado,'<BR/>');
		break;
	case 2:
		var num = new Number();
		var raizc = new Number();
		document.write("Digite un numero:",'<BR/>');
		num = Number(prompt());
		raizc = Math.sqrt(num);
		document.write("El resultado es:",raizc,'<BR/>');
		break;
	case 3:
		break;
	default:
		document.write("Se equivoc� de opci�n de men�",'<BR/>');
	}
}

