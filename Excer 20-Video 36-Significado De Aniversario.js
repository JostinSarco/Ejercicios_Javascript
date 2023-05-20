// Elaborar un programa que me muestre el significado de aniversario de cada d�cada
// hasta los 60. (Diagrama De Flujo).
function ejercicio() {
	var decada = new Number();
	document.write("Digite una decada",'<BR/>');
	decada = Number(prompt());
	switch (decada) {
	case 10:
		document.write("Bodas de Hojalata",'<BR/>');
		break;
	case 20:
		document.write("Bodas de Porcelana",'<BR/>');
		break;
	case 30:
		document.write("Bodas de Perlas",'<BR/>');
		break;
	case 40:
		document.write("Bodas de Rubi",'<BR/>');
		break;
	case 50:
		document.write("Bodas de Oro",'<BR/>');
		break;
	case 60:
		document.write("Bodas de Diamantes",'<BR/>');
		break;
	default:
		document.write("D�cada desconocida",'<BR/>');
	}
}

