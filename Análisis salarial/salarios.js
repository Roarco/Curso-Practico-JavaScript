// variables 
let paises = ["Colombia","Mexico","Brasil"];

let colombia =[];
let mexico = [];
let brasil = [];

let salaryColOrder;
let salaryMexOrder;
let salaryBraOrder;

let paisSel;
let mitad;
let mediana;

// Funcion para agregar los de los inputs a las variables

function agregarDatos () {
 let pais = document.getElementById("InputPais").value;
 let name = document.getElementById("InputName").value;
 let salary = parseInt(document.getElementById("InputSalary").value);


 switch(pais){
    case "Colombia":
      paisSel = pais;
      colombia.push({name,salary});
      salaryColOrder = colombia.map(function(name){return name.salary}).sort(function(a,b){return a -b});
       mitad = parseInt(salaryColOrder.length / 2); 
      document.getElementById("respuestas").innerHTML ="Datos Agregados correctamente"; 
      break;

    case "Mexico":
      paisSel = pais;
      mexico.push({name,salary});
      salaryMexOrder = mexico.map(function(name){return name.salary}).sort(function(a,b){return a -b});
      mitad = parseInt(salaryMexOrder.length / 2); 
      document.getElementById("respuestas").innerHTML ="Datos Agregados correctamente"; 
      break;  

    case "Brasil":
      paisSel = pais;
      brasil.push({name,salary});
      salaryBraOrder = brasil.map(function(name){return name.salary}).sort(function(a,b){return a -b});
      mitad = parseInt(salaryBraOrder.length / 2);
      document.getElementById("respuestas").innerHTML ="Datos Agregados correctamente"; 
      break;    

 }

}





