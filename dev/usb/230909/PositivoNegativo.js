// Este codigo ha sido generado por el modulo psexport 20230113-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function positivonegativo() {
	var a;
	document.write("Escribe un número entre -10 y 10", '<BR/>');
	a = prompt();
	if (a>=0) {
		document.write("El número ingresado es POSITIVO", '<BR/>');
	} else {
		document.write("El número es NEGATIVO", '<BR/>');
	}
}

