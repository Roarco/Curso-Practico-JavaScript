
let colombia = [];

let colombiasalary;

function agregarDatos () {

     let name = document.getElementById("InputName").value;
    let salary =parseInt(document.getElementById("InputSalary").value);

   colombia.push({name,salary});

   colombiasalary = colombia.map(function(num){

    return num.salary;
});

}


