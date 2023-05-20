// Ejercicio: Un profesor prepara tres cuestionarios para una evaluaci�n final:
// A,B y C. Se sabe que se tarda 5 minutos en revisar el cuestionario A,
// 8 en revisar el cuestionario B y 6 en el C, la cantidad de ex�menes de cada
// tipo se entran por el teclado. �Cu�ntas horas y cu�ntos minutos se tardar� en 
// revisar todas las evaluaciones?
function ejercicio() {
	var cantidada = new Number();
	var cantidadb = new Number();
	var cantidadc = new Number();
	var tiempoa = new Number();
	var tiempob = new Number();
	var tiempoc = new Number();
	var tiempo_total = new Number();
	var horas = new Number();
	var minutos = new Number();
	document.write("Digite la cantidad de cuestionarios A:",'<BR/>');
	cantidada = Number(prompt());
	document.write("Digite la cantidad de cuestionarios b:",'<BR/>');
	cantidadb = Number(prompt());
	document.write("Digite la cantidad de cuestionarios c:",'<BR/>');
	cantidadc = Number(prompt());
	// Calcular los minutos que se tardar� por cada cuestionario
	tiempoa = cantidada*5;
	tiempob = cantidadb*8;
	tiempoc = cantidadc*6;
	// Calculamlos el tiempo total que le toma revisar todos los cuestionarios 
	tiempo_total = tiempoa+tiempob+tiempoc;
	// Calculamos las horas y minutoshoras
	horas = Math.trunc(tiempo_total/60);
	minutos = tiempo_total%60;
	document.write("Se tardara ",horas," Horas y ",minutos," minutos ",'<BR/>');
}

