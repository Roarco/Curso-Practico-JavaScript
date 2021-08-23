
// con la funcion map, creamos un nuevo array pero solo con los salarios.
/* const salarysCol = colombia.map((colombiano) => {
    return colombiano.salary;
}); */

// con la funcion sort, ordenamos esos salarios en este caso en forma ascendente.
 /* const salarysColOrdenados = colombia.sort((a,b) => {
    return a - b;
}); */



// con esta funcion calcularemos la mediana general.

    

 function calcularMedianaGeneral (){

       if (paisSel === "Colombia" && salaryColOrder.length % 2 === 0){

        const elemento1 = salaryColOrder[mitad];
        const elemento2 = salaryColOrder[mitad -1];

        mediana = (elemento1 + elemento2) / 2; 
        medianaGeneralCol = mediana;
        

        document.getElementById("respuestas").innerHTML ="La mediana general de salarios del pais : "  + paisSel + " " + "es : " + mediana;

     } else if (paisSel === "Colombia" && salaryColOrder.length % 2 !== 0) { 
        document.getElementById("respuestas").innerHTML ="La mediana de salarios del pais : "  + paisSel + " " + "es : " + salaryColOrder[mitad];
        medianaGeneralCol = salaryColOrder[mitad];


    } else if (paisSel === "Mexico" && salaryMexOrder.length % 2 === 0){

        const elemento1 = salaryMexOrder[mitad];
        const elemento2 = salaryMexOrder[mitad -1];

        mediana = (elemento1 + elemento2) / 2; 
        medianaGeneralMex = mediana; 

        document.getElementById("respuestas").innerHTML ="La mediana de salarios del pais : "  + paisSel + " " + "es : " + mediana;

      
     }else if(paisSel === "Mexico" && salaryMexOrder.length % 2 !== 0){

        document.getElementById("respuestas").innerHTML ="La mediana de salarios del pais : "  + paisSel + " " + "es : " + salaryMexOrder[mitad];
        medianaGeneralMex = salaryMexOrder[mitad];

    }   else if (paisSel === "Brasil" && salaryBraOrder.length % 2 === 0){

        const elemento1 = salaryBraOrder[mitad];
        const elemento2 = salaryBraOrder[mitad -1];

        mediana = (elemento1 + elemento2) / 2; 
        medianaGeneralBra = mediana;

        document.getElementById("respuestas").innerHTML ="La mediana de salarios del pais : "  + paisSel + " " + "es : " + mediana;

      
     }else if (paisSel === "Brasil" && salaryBraOrder.length % 2 !== 0){

        document.getElementById("respuestas").innerHTML ="La mediana de salarios del pais : "  + paisSel + " " + "es : " + salaryBraOrder[mitad];
        medianaGeneralBra = salaryBraOrder[mitad];
    }         

} 

//aqui  calcularemos El Top10% de los salarios y su mediana

let medianaTop10;
   
function calcularMedianaTop10(){

    //vaiables Top10 colombia

    let sliceColInico;
    let sliceColFin;
    let salariosColTop10  

    let mitadTop10Col;

    //variables Top 10 mexico

    let sliceMexInico;
    let sliceMexFin;
    let salariosMexTop10;

    let mitadTop10Mex;

    //variables Top 10 brasil

    let sliceBraInico;
    let sliceBraFin;
    let salariosBraTop10;

    let mitadTop10Bra;


    switch(paisSel){
        case "Colombia":
        sliceColInico = parseInt((salaryColOrder.length  * 90 ) / 100 );
        sliceColFin =  salaryColOrder.length -sliceColInico ;
        salariosColTop10 = salaryColOrder.slice(- sliceColFin);
        mitadTop10Col = parseInt(salariosColTop10.length /2);

        break;

        case "Mexico":
        sliceMexInico = parseInt((salaryMexOrder.length  * 90 ) / 100 );
        sliceMexFin =  salaryMexOrder.length -sliceMexInico ; 
        salariosMexTop10 = salaryMexOrder.slice(- sliceMexFin); 
        mitadTop10Mex = parseInt(salariosMexTop10.length /2); 

        break;

        case "Brasil":
        sliceBraInico = parseInt((salaryBraOrder.length  * 90 ) / 100 );  
        sliceBraFin = salaryBraOrder.length -sliceBraInico ;
        salariosBraTop10 = salaryBraOrder.slice(- sliceBraFin);
        mitadTop10Bra = parseInt(salariosBraTop10.length /2);

        break;

    }


    if (paisSel === "Colombia" && salariosColTop10.length === 1){
        document.getElementById("respuestas").innerHTML ="La mediana de salarios Top10 del pais : "  + paisSel + " " + "es : " + salariosColTop10;

    }else if (paisSel === "Colombia" && salariosColTop10.length % 2 === 0){
    
    const elemento1 = salariosColTop10[mitadTop10Col];
    const elemento2 = salariosColTop10[mitadTop10Col -1];

    medianaTop10 = (elemento1 + elemento2) / 2; 

    document.getElementById("respuestas").innerHTML ="La mediana de salarios Top10 del pais : "  + paisSel + " " + "es : " + medianaTop10;

 }else if (paisSel === "Colombia" && salariosColTop10.length % 2 !== 0 ){

    document.getElementById("respuestas").innerHTML ="La mediana de salarios Top10 del pais : "  + paisSel + " " + "es : " + salariosColTop10[mitadTop10Col];

 }else if (paisSel === "Mexico" && salariosMexTop10.length === 1){

    document.getElementById("respuestas").innerHTML ="La mediana de salarios Top10 del pais : "  + paisSel + " " + "es : " + salariosMexTop10;

 }else if (paisSel === "Mexico" && salariosMexTop10.length % 2 === 0){

    const elemento1 = salariosMexTop10[mitadTop10Mex];
    const elemento2 = salariosMexTop10[mitadTop10Mex -1];

    medianaTop10 = (elemento1 + elemento2) / 2; 

    document.getElementById("respuestas").innerHTML ="La mediana de salarios Top10 del pais : "  + paisSel + " " + "es : " + medianaTop10;

 }else if (paisSel === "Mexico" && salariosMexTop10.length % 2 !== 0){

    document.getElementById("respuestas").innerHTML ="La mediana de salarios Top10 del pais : "  + paisSel + " " + "es : " + salariosMexTop10[mitadTop10Mex];


 } else if (paisSel === "Brasil" && salariosBraTop10.length === 1){

    document.getElementById("respuestas").innerHTML ="La mediana de salarios Top10 del pais : "  + paisSel + " " + "es : " + salariosBraTop10;

 }else if (paisSel === "Brasil" && salariosBraTop10.length % 2 === 0 ){

    const elemento1 = salariosBraTop10[mitadTop10Bra];
    const elemento2 = salariosBraTop10[mitadTop10Bra -1];

    medianaTop10 = (elemento1 + elemento2) / 2; 

    document.getElementById("respuestas").innerHTML ="La mediana de salarios Top10 del pais : "  + paisSel + " " + "es : " + medianaTop10;

 }else if (paisSel === "Brasil" && salariosBraTop10.length % 2 !== 0){

    document.getElementById("respuestas").innerHTML ="La mediana de salarios Top10 del pais : "  + paisSel + " " + "es : " + salariosBraTop10[mitadTop10Bra];

 }


}

let medianaGeneralCol;
let medianaGeneralMex ;
let medianaGeneralBra;

function calcularDiffSal (){

  
   let diffSalColMex =  parseInt(medianaGeneralCol - (medianaGeneralMex * 189.81));

   let diffSalColBra =  parseInt(medianaGeneralCol - (medianaGeneralBra * 718.61));

   let diffSalMexBra =  parseInt(medianaGeneralMex - (medianaGeneralBra * 3.79));

   document.getElementById("respuestas").innerHTML ="La diferencia salarial Colombia-Mexico es de : " + diffSalColMex + " pesos colombianos";

   document.getElementById("respuestas2").innerHTML ="La diferencia salarial Colombia-Brasil es de : " + diffSalColBra + " pesos colombianos";

   document.getElementById("respuestas3").innerHTML ="La diferencia salarial Mexico-Brasil es de : " + diffSalMexBra + " pesos mexicanos";

}

