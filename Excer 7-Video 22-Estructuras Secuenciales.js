// Ejercicio 1: Calcular la cantidad de segundos que est�n incluidos en el
// n�mero de horas, minutos y segundos ingresados por el usuario.
function ejercicio1() {
	var horas = new Number();
	var minutos = new Number();
	var seg = new Number();
	var horas_seg = new Number();
	var minutos_seg = new Number();
	var total_seg = new Number();
	document.write("Digite las horas:",'<BR/>');
	horas = Number(prompt());
	document.write("Digite los minutos:",'<BR/>');
	minutos = Number(prompt());
	document.write("Digite los seg:",'<BR/>');
	seg = Number(prompt());
	// Calcular el equivalente en segundos
	horas_seg = horas*3600;
	minutos_seg = minutos*60;
	total_seg = horas_seg+minutos_seg+seg;
	document.write("Los segundos equivalentes son:",total_seg,'<BR/>');
}

