// codigo para calcular la media armonica
let listaUsuario; 


function numeroDatos (){

    const InputNumeroDatos = document.getElementById("InputNumeroDatos");
    const value = InputNumeroDatos.value;
    const arraylist = value.split(",").map((i) => Number(i)).sort(function(a,b){return a - b });

    listaUsuario = arraylist; 

    return listaUsuario;
} 

function calcularMediaArmonica (){

 listaUsuario = numeroDatos();

 const listaUsuarioInvertida = listaUsuario.map((elemento) => 1/elemento); 
 const sumaListaUsuarioInvertida = listaUsuarioInvertida.reduce((acomulador,valorActual) => acomulador + valorActual);
 const mediaArmonica = listaUsuario.length / sumaListaUsuarioInvertida;

 document.getElementById("InputResultadoMediaArmonica").value = mediaArmonica;
    
}