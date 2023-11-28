// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function sin_titulo() {
	var gasto, j, p, plato;
	document.write("Ingrese el nombre del plato : ",'<BR/>');
	plato = prompt();
	document.write("Ingrese la cantidad de ingredientes",'<BR/>');
	p = Number(prompt());
	var productos = new Array(p);
	var precios = new Array(p);
	gasto = 0;
	for (j=1;j<=p;j++) {
		document.write("Ingrese el nombre del ",j," ingrediente ",'<BR/>');
		productos[j-1] = prompt();
		document.write("Ingrese el precio del ",j," ingrediente ",'<BR/>');
		precios[j-1] = Number(prompt());
		gasto = gasto+precios[j-1];
	}
	document.write("El costo a gastar es : ",gasto,'<BR/>');
}

