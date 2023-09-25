//comentario de linea de js
/*comentario de bloque de js(es igual que en css)*/


//PRIMEROS EJEMPLOS DE JAVASCRIPT:


/* console.log(); es una función en JavaScript que sirve para imprimir mensajes en la consola. Esto nos puede ser util para DEPURAR? y REGISTRAR información cuando se ejecuta el programa.
>'console': Es algo llamado 'OBJETO GLOBAL?' en JavaScript (existen muchos objetos como este que vienen con el estándar del lenguaje, es decir son predefinidos). Éste proporciona acceso a la consola. Dichos objetos globales poseen características conocidas como MÉTODOS (funciones asociadas a ese objeto, no independientes) Y PROPIEDADES (atributos?).
>'.': El punto que viene despues del nombre del objeto es un OPERADOR que nos da acceso a los métodos y propiedades de ese objeto.
>'log()': Es un método que realiza la acción principal de IMPRIMIR UN MENSAJE EN LA CONSOLA. Puede recibir uno o más argumentos:
*/

//ALGUNAS CARACTERÍSTICAS DE LOS ARGUMENTOS QUE PUEDE RECIBIR UN MÉTODO EN JAVASCRIPT USANDO COMO EJEMPLO EL MÉTODO log():

console.log("mensaje escrito con 'console.log();'");//En este ejemplo recibe un solo argumento que es un string o cadena de caracteres (texto). A este tipo de dato lo encerramos entre comillas "dobles" o 'simples'
console.log(10);//En este otro ejemplo recibe un entero (numérico)
console.log(5+6);//También podemos usar como argumento expresiones numéricas, como esta operación matemática 5+6 que nos va a mostrar el número que representa dicha operacion: '11'

console.log("este es un texto seguido de un número ", 10);//En este ejemplo el método log() recibe dos argumentos, que tenemos que separar con una coma
console.log("este texto está seguido por el resultado de restar 10-2: ", 10-2);//En este otro son un string y una expresion numérica

/*También existe algo conocido como "CONCATENACIÓN" en JavaScript, que es la acción de unir o combinar cadenas de texto. Se usa para construir cadenas más largas a partir de cadenas cortas o para combinar texto con VALORES DE VARIABLES.
La concatenación se hace con el OPERADOR +, el mismo que se usa para sumar números. Pero cuando se utiliza el operador + con cadenas de texto, incluso si hay números involucrados, se concatenan en lugar de sumarse aritméticamente:
*/
console.log("mostra estos numeros" + 7 + 1);//En este caso estamos concatenando un string y dos números, que no se van a sumar sino que van a ser interpretados como caracteres de texto y mostrados de esa forma.
console.log("texto, " + " otro texto");//Estos dos strings se mostrarán como una sola cadena de caracteres
console.log("mostra el resultado de 10 - 8: " + (10-8));//Sin embargo, sí es posible concatenar una expresión numérica con un texto, simplemente tenemos que encerrar entre paréntesis dicha operación: (10-8). Ahora sí se mostrará el número resultante como caracter.


/*
La función document.write(): es una función JavaScript que se utiliza para ESCRIBIR CONTENIDO EN UN DOCUMENTO HTML en tiempo de ejecución?. Esto quiere decir que es una función que MODIFICA dicho documento, a diferencia de la anterior que sólo interactuaba con la consola. 
>'document': Es un objeto en JavaScript que representa el DOCUMENTO ACTUAL cargado en el navegador. Da acceso a todas las partes del documento, como elementos HTML, estilos, eventos, etc.
>'write()': es uno de los métodos de este objeto. Permite ESCRIBIR CONTENIDO DIRECTAMENTE EN EL DOCUMENTO HTML, que debe estar encerrado entre comillas si es texto plano o elementos html. El argumento pasado a write() se interpreta como HTML o texto plano y se agrega al documento en el lugar donde se encuentra el script que contiene esta "llamada" (le decimos llamada a la acción de utilizar un método escribiendo su nombre y (), como invocandolo).
*/
document.write("Mensaje escrito con 'document.write();'");//Este texto plano será mostrado en la ventana del navegador
document.write("<h2>Este subtitulo h2 esta añadido con JavaScript</h2>", 3*14);//Vemos que a los elementos HTML tenemos que escribirlos como strings, encerrandolos entre comillas. Los números y expresiones numéricas pueden ser escritos tal cual y son también interpretados como texto.


/*
La función alert(): es una función incorporada en JavaScript que muestra un cuadro de diálogo o una ventana emergente en el navegador web con un mensaje. Esta función se usa comúnmente para mostrar mensajes simples o alertas al usuario.
Con ella podemos mostrar un cuadro de diálogo emergente en el navegador con un botón de "Aceptar" y un mensaje de texto que es el argumento que proporcionamos dentro de los paréntesis:
*/
alert("Este es una alerta");//Cualquier argumento que le demos será interpretado como string (ya sea un numero o un valor booleano 'true'/'false')

/* Es un método que pide datos de entrada: */
prompt("Ingrese un dato: ");

/*Ejemplo de uso de prompt + console.log */
/*El siguiente es un programa que pide un nombre con prompt y lo guarda en memoria con la variable "nombre" */
let nombre= prompt("Ingrese su nombre");

/* Después muestra en consola el siguiente mensaje llamando el dato guardado en la variable */
console.log("El nombre ingresado es ", nombre);