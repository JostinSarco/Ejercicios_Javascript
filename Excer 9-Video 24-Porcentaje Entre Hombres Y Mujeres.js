function ejercicio() {
	var hombres = new Number();
	var mujeres = new Number();
	var total_estudiantes = new Number();
	var porcentajeh = new Number();
	var porcentajem = new Number();
	document.write("Digite la cantidad de hombres:",'<BR/>');
	hombres = Number(prompt());
	document.write("Digite la cantidad de mujeres:",'<BR/>');
	mujeres = Number(prompt());
	total_estudiantes = hombres+mujeres;
	porcentajeh = hombres/total_estudiantes*100;
	porcentajem = mujeres/total_estudiantes*100;
	document.write("El porcentaje de Hombres es:",porcentajeh,"%",'<BR/>');
	document.write("El porcentaje de Mujeres es:",porcentajem,"%",'<BR/>');
}

