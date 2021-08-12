/* 
¿Que es una variable?

una variable podemos considerarla como un contenedor donde podemos almacenar datos en memoria.

¿Cuál es la diferencia entre declarar e inicializar una variable?

cuando declaramos una variable no le estamos asignando un dato, simplemente le estamos diciendo a javascript
que esa variable existe.
En cambio cuando inicializamos una varible le estamos asignando un valor como tal.

¿Cuál es la diferencia entre sumar números y concatenar strings?

para sumar numeros estrictamente el tipo de dato debe ser el mismo y por ende de tipo numero.

mientras que para concatenar no secesariamente se necesita que sean del mismo tipo de datos.

¿Cuál operador me permite sumar o concatenar?

el operador que nos permite realizar cualquiera de estas dos acciones estas: +

Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre
Apellido
Nombre de usuario en Platzi
Edad
Correo electrónico
Mayor de edad
Dinero ahorrado
Deudas

Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)

Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una función?

una función es un trozo codigo que nos permite realizar una tarea en especifico.

¿Cuándo me sirve usar una función en mi código?

cuando queremos reutilizar codigo.

¿Cuál es la diferencia entre parámetros y argumentos de una función?

los parametros son variables previamente definidos en las funciones, mientras que los argumentos son esos
datos que le pasamos a los parametros.

Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables 
constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una condicional?

las condicionales son reglas que nos permiten validar si algo es verdadero o no.

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

los tipos de condicionales son if,else,else if

el if evalua la condicion y si se cumple ejecuta cierto codigo
el else se ejecuta si no se cumple esa condicion if
el else if es como un if dentro de otro, es decir si se cumple esto pasa esto, sino esto y asi sucesivamente 

¿Puedo combinar funciones y condicionales?

si es posible combinar funciones y condicionales

Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

Replica el comportamiento de tu condicional anterior con if, else y else if, 
pero ahora solo con if (sin else ni else if).

Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar 
este comportamiento con arrays y un solo condicional. 😏

Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un ciclo?

los ciclos son una manera rapida y sencilla en la que podemos hacer que una tarea se repita varias veces
sin que lo hagamos de manera manual.

¿Qué tipos de ciclos existen en JavaScript?

existe el ciclo for, for of,for in, while, do while

¿Qué es un ciclo infinito y por qué es un problema?

un ciclo infinito es aquel que va a realizar una tarea infinidad de veces, y su problema
radica entonces en que generara un colapso en la memoria ram provocando que nuestro ordenador se apague. 

¿Puedo mezclar ciclos y condicionales?

si es posible 

Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}


 Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. 
 Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

Pista: puedes usar la función prompt de JavaScript.

Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un array?

Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos 
para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de 
los elementos de un array son variables.

¿Qué es un objeto?

un objeto es un entidad independiente con propiedades y tipos.

¿Cuándo es mejor usar objetos o arrays?

el uso de uno u otro dependera de las necesidades de la problematica.

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

claro que si se peuden mezclar

Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos 
uno por uno (no se vale imprimir el array completo).

Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno 
por uno (no se vale imprimir el objeto completo).
*/

//Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
var Nombre = "Pepito";
var Apellido = "Perez";
var nombreUsuarioPlatzi = "pepperez";
var Edad = 22;
var correoElectrónico = "pepperez@gmail.com";
var mayorEdad = true;
var dineroAhorrado = 10000;
var Deudas =5000;

//Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
var nombreCompleto = Nombre + " " + Apellido;
var dineroReal = dineroAhorrado - Deudas;

console.log(`Nombre Completo: ${nombreCompleto}`);
console.log(`Dinero Real: ${dineroReal}`);

/* Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables
constantes por parámetros y argumentos en una función: */

const name1 = "Juan David";
const lastname = "Castro Gallego";
const completeName = name1 + lastname;
const nickname = "juandc";


function myFunction(name, lastname, nickname){
    const completeName =name + " " + lastname;
  
  console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
  }
  
  myFunction("Juan David", "Castro Gallego", "juandc");


/* Replica el comportamiento del siguiente código que usa la sentencia 
switch utilizando if, else y else if: */

 const tipoDeSuscripcion = "Basic";

 if (tipoDeSuscripcion == "Free"){
    console.log("solo puedes tomar los cursos gratis");
 } else if(tipoDeSuscripcion == "Basic"){
    console.log("puedes tomar casi todos los cursos de Platzi durante un mes");
 }else if(tipoDeSuscripcion == "Expert"){
    console.log("puedes tomar casi todos los cursos de Platzi durante un año");
 }else if(tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tu y alguien más pueden tomar TODOS  los cursos de Platzi durante un año");
 }else{
     console.log("Crea una cuenta y adquiere tu suscripcion");
 }

/* Replica el comportamiento de tu condicional anterior con if, else y else if, 
pero ahora solo con if (sin else ni else if). */ 


 if(tipoDeSuscripcion == "Free"){
    console.log("solo puedes tomar los cursos gratis");
}  if(tipoDeSuscripcion == "Basic"){
        console.log("puedes tomar casi todos los cursos de Platzi durante un mes"); 
    }if(tipoDeSuscripcion == "Expert"){
        console.log("puedes tomar casi todos los cursos de Platzi durante un año"); 
    }if(tipoDeSuscripcion == "ExpertPlus"){
        console.log("Tu y alguien más pueden tomar TODOS  los cursos de Platzi durante un año");   
    }if(tipoDeSuscripcion !== "Free" && tipoDeSuscripcion !== "Basic" && tipoDeSuscripcion !== "Expert" && tipoDeSuscripcion !== "ExpertPlus" ){
         console.log("Crea una cuenta y adquiere tu suscripcion");
    }

 
    //Bonus reto
    const tipoDeSuscripcion = "ExpertPlus";

    const Suscripciones= ["Free","Basic","Expert","ExpertPlus"];
    
    const Respuestas=["Solo puedes tomar los cursos gratis",
                      "Puedes tomar casi todos los cursos de Platzi durante un mes",
                      "Puedes tomar casi todos los cursos de Platzi durante un año",
                      "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];
    
    const index = Suscripciones.indexOf(tipoDeSuscripcion);
    
    if (index ==-1 ){
        console.log("Crea una cuenta y adquiere tu suscripcion");
    }
    else{
        console.log(Respuestas[index]);
    }


// Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

let i = 0;

while(i < 5){
console.log("El valor de i es: " + i);
i++;
}

i = 10;

while(i >= 2){
console.log("El valor de i es: " + i);
i--;
}

/* Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, 
mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar. */

let respuesta = 0;

do {
respuesta = parseInt(prompt("cuánto es el resultado de realizar la operacion 2 + 2"));

}while( respuesta !== 4)

if(respuesta === 4){
console.log("Felicitaciones");
} 

//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

function myArray (array){
    console.log(array[0])
    }
    myArray(["roberth", "arrieta"]);


/* Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos 
uno por uno (no se vale imprimir el array completo). */    


function myArray (array){
    for (let elemento of array){
    console.log(elemento);
    }
    } 
    
    myArray(["Roberth", "Andres", 22]);

/* Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos 
uno por uno (no se vale imprimir el objeto completo).*/

function myObject (obejeto){
    for (let elemento in obejeto){
    console.log(elemento);
    }
    }
    myObject({
      Tipo:"Carro",
      Color:"Rojo"
    });
    


    


    




    




















