
let listaUsuario;

//codigo para calcular la media aritmetica

function numeroDatos (){
    const InputNumeroDatos = document.getElementById("InputNumeroDatos");
    const value = InputNumeroDatos.value;
    const arraylist = value.split(",").map((i) => Number(i)).sort(function(a,b){return a - b });
    listaUsuario = arraylist; 

    return arraylist;
}

function calcularMediaAritmetica (){
    
    listaUsuario = numeroDatos();

     let sumaListaUsuario = 0;

    for (let i = 0 ; i < listaUsuario.length; i++){

        sumaListaUsuario = sumaListaUsuario + listaUsuario[i];

    } 

    // puedo usar esta forma tambien para hacer la suma

    /* const sumaListaUsuario = listaUsuario.reduce(
        function (valorAcomulado = 0, nuevoElemento) {
            return valorAcomulado + nuevoElemento;
        }
    ); */

    const mediaAritmetica = sumaListaUsuario / listaUsuario.length;

    document.getElementById("InputResultadoMedia").value= mediaAritmetica;

}

//codigo para calcular la mediana

function calcularMediana (){

    let mitadlistaUsuario = parseInt(listaUsuario.length / 2);
    let mediana;

    if (listaUsuario.length % 2 === 0) {
        const elemento1 = listaUsuario[mitadlistaUsuario];
        const elemento2 = listaUsuario[mitadlistaUsuario -1];

        mediana = (elemento1 + elemento2) / 2; 

        document.getElementById("InputResultadoMediana").value = mediana ;
        
    }else{
        document.getElementById("InputResultadoMediana").value = mediana =listaUsuario[mitadlistaUsuario];
    }

}

//codigo para calcular la moda

function calcularModa (){

    function contar(arrayElementos,valorAcontar){
        
        return arrayElementos.filter((elemento) => elemento === valorAcontar).length;
    }

    const [repeticiones,moda] = listaUsuario.reduce(
        (acomulador,valorActual) => {
            const nn = contar(listaUsuario,valorActual);
            if (nn === acomulador[0] && acomulador[1].every((item)=> item !== valorActual)) {
                acomulador[1].push(valorActual);  
            } else if (nn > acomulador[0]){
                acomulador = [nn,[valorActual]];
            }

            return acomulador;
        },
        [0,[]]
    );

    document.getElementById("InputResultadoModa").value = moda;


}
 


