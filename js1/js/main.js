//comentario de linea de js
/*comentario de bloque de js(es igual que en css)*/
console.log("mensaje escrito con console.log();");
/* muestra en la consola */

console.log("texto, " + " otro texto");
console.log("un texto más un numero: "+11);
console.log("mostra estos numeros" + 1+1);

console.log(10);
console.log("mostra el resultado de 10 - 8: " + (10-8));

console.log("mostra el resultado de otra forma", 10 - 8);

console.log("hola ", 10);

document.write("Mensaje escrito con document.write();");

/* muestra contenido en el navegador por lo tanto modifica el documento html: */

document.write("<h2>Este subtitulo h2 esta añadido con JavaScript</h2>");

/* muestra un mensaje en una pantalla emergente de alerta: */

alert("Este es una alerta");


/* Es un método que pide datos de entrada: */
prompt("Ingrese un dato: ");

/*Ejemplo de uso de prompt + console.log */
/*El siguiente es un programa que pide un nombre con prompt y lo guarda en memoria con la variable "nombre" */
nombre= prompt("Ingrese su nombre");

/* Después muestra en consola el siguiente mensaje llamando el dato guardado en la variable */
console.log("El nombre ingresado es ", nombre);