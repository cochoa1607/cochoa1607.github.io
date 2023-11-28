// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo de suma de dos números y mostrar el resultado
function suma() {
    let numero01, numero02, resultado;
    // Se desplegará en pantalla un mensaje al usuario solicitando
    // el número 1, de igual manera se solicitara el número 2
    // document.write("Ingresar el primer numero: ", '<BR/>');
    // numero01 = prompt();
    // document.write("Ingresar el segundo numero: ", '<BR/>');
    // numero02 = prompt();

    numero01 = Number(prompt("Ingresar el primer número:"));
    numero02 = Number(prompt("Ingresar el segundo número:"));

    resultado = numero01 + numero02;

    alert("El resultado es: " + resultado);

    // Ahora se calcula la suma y se guarda el resultado en la 
    // variable resultado
    // Por último desplegar el resultado almacenado en pantalla
    // document.write("El resultado de la suma es: ", resultado, '<BR/>');
}
