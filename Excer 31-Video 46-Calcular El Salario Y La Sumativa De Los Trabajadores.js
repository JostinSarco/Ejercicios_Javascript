// Dada las horas trabajadas de 5 personas y la 
// tarifa de pago calcuylar el salario,y las
// sumatoria de todos los salarios. (Diagrama De Flujo).
function ejercicio() {
	var i = new Number();
	var suma_total = new Number();
	var numero_t = new Number();
	var salario = new Number();
	var horas = new Number();
	var suma = new Number();
	document.write("Digite el numero de trabajadores",'<BR/>');
	numero_t = Number(prompt());
	document.write("Digite el valor del salario por hora",'<BR/>');
	salario = Number(prompt());
	i = 1;
	while (i<=numero_t) {
		document.write(i," . Digite el numero de horas del trabajador",'<BR/>');
		horas = Number(prompt());
		i = i+1;
		suma = salario*horas;
		document.write("El valor a cancelar a el trabajador es: ",suma,'<BR/>');
		suma_total = suma*numero_t;
	}
	document.write("El salario final de los trabajadores es: ",suma_total,'<BR/>');
}

