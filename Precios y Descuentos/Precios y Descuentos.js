
function calcularPrecionConDescuento(precio,descuento) {
    var precio = document.getElementById("InputPrecio");
    const valuePrecio = precio.value;
    var descuento = document.getElementById("InputDescuento");
    const valueDescuento = descuento.value;

   
   const porcentajeConDescuento = 100 - valueDescuento;
   const precioConDescuento = (valuePrecio * porcentajeConDescuento) / 100 ;

   document.getElementById("InputResultado").value="El precio a pagar es: $" + precioConDescuento;
}