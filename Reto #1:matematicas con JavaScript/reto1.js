
function calcularAlturaTrinaguloIsóceles(lado1, lado2, base) {

    var lado1 = document.getElementById("InputTrianguloIsóceles1");
    const value1 = lado1.value; 
    var lado2 = document.getElementById("InputTrianguloIsóceles2");
    const value2 = lado2.value; 
    var base = document.getElementById("InputTrianguloIsóceles3");
    const value3 = base.value; 

   if (value1 === value2 && value1 !== base) {
       alert("Efectivamente es un triangulo isóceles");

       const altura = Math.sqrt(value1 * value1 - value3 * value3 /4);

       alert("La altura es : " + altura +"cm")
   }else{
       alert("ingresa los datos correctamente");
   }
}
