// Este codigo ha sido generado por el modulo psexport 20230113-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function calculadora() {

	let op_01, op_02, op_num, result;

	document.write("Operaciones a realizar :", '<BR/>');
	document.write("1: Suma", '<BR/>');
	document.write("2: Resta", '<BR/>');
	document.write("3: Multiplicación", '<BR/>');
	document.write("4: División", '<BR/>');
	document.write("¿Que operación deseas realizar?", '<BR/>');
	op_num = prompt();

	if (op_num == 1) {

		document.write("Ingresa el primer valor", '<BR/>');
		op_01 = Number(prompt());
		document.write("Ingresa el segundo valor", '<BR/>');
		op_02 = Number(prompt());
		result = op_01 + op_02;
		document.write("La suma de ", op_01, "+", op_02, "=", result, '<BR/>');

	} else if (op_num == 2) {
		document.write("Ingresa el primer valor", '<BR/>');
		op_01 = Number(prompt());
		document.write("Ingresa el segundo valor", '<BR/>');
		op_02 = Number(prompt());
		result = op_01 - op_02;
		document.write("la resta de ", op_01, "-", op_02, "=", result, '<BR/>');
	} else if (op_num == 3) {
		document.write("Ingresa el primer valor", '<BR/>');
		op_01 = Number(prompt());
		document.write("Ingresa el segundo valor", '<BR/>');
		op_02 = Number(prompt());
		result = op_01 * op_02;
		document.write("la multiplicaci�n de ", op_01, "x", op_02, "=", result, '<BR/>');
	} else if (op_num == 4) {
		document.write("Ingresa el primer valor", '<BR/>');
		op_01 = Number(prompt());
		document.write("Ingresa el segundo valor", '<BR/>');
		op_02 = Number(prompt());
		result = op_01 / op_02;
		document.write("la multiplicaci�n de ", op_01, "/", op_02, "=", result, '<BR/>');
	} else {



	}
}

