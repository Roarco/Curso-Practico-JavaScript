// codigo del cuadrado

console.group("Cuadrados");

function perimetroCuadrado (lado) {
    return lado* 4;
}

function areaCuadrado (lado) {
    return lado * lado;
}

console.groupEnd();

// codigo del triangulo

console.group("triangulos");

function perimetroTriangulo (lado1, lado2, base) {
    return (parseFloat(lado1) + parseFloat(lado2) + parseFloat(base));
    
}

function areaTriangulo (base, altura) {
    return (parseFloat(base) * parseFloat(altura)) / 2;
}


console.groupEnd();

// codigo del circulo

console.group("Circulos");

const PI = Math .PI;

function diametroCirculo (radio) {
    return radio * 2 ;
}

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo (radio) {
    return (radio * radio ) * PI;
}

console.groupEnd();

// Aqui ya estamos interactuando con el HTML


//codigo cuadrado

function calcularPerimetroCuadrado(){
   const input = document.getElementById("InputCuadrado");
   const value = input.value;

   const perimetro = perimetroCuadrado(value);
   alert("El perimetro es: " + perimetro + "cm");
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

   const area = areaCuadrado(value);
   alert("El area es: " + area +  "cm^2");
}

//codigo triangulo

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("InputTriangulo1");
    const value1 = lado1.value;
    const lado2 = document.getElementById("InputTriangulo2");
    const value2 = lado2.value;
    const base = document.getElementById("InputTriangulo3");
    const value3 = base.value;
  
    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El perimetro es: " + perimetro + "cm");    
 }

 function calcularAreaTriangulo(){
    const base = document.getElementById("InputTriangulo3");
    const value1 = base.value;
    const altura = document.getElementById("InputTriangulo4")
    const value2 = altura.value;
  
    const area = areaTriangulo(value1,value2);
    alert("EL area es: " + area +  "cm^2");    
 }

 //codigo Círculo

function calcularPerimetroCirculo(){
    const radio = document.getElementById("InputCirculo");
    const value = radio.value;

    const perimetro = perimetroCirculo(value);
    alert("El perimetro es: " + perimetro + "cm");    
 }

 function calcularAreaCirculo(){
    const radio = document.getElementById("InputCirculo");
    const value = radio.value;
    
  
    const area = areaCirculo(value);
    alert("EL area es: " + area +  "cm^2");    
 }

 







