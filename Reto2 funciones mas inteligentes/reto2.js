function calcularPrecionConDescuento(precio,cupon) {
    var precio = document.getElementById("InputPrecio");
    const valuePrecio = precio.value;

    var cupon = document.getElementById("InputDescuentoCupon");
    const valueDescuentoCupon = cupon.value;

    const cupons =[
    {
        name:"efectivo",
        descuento:20
    },
    {
        name:"tarjetaCD",
        descuento:30
    },
    {
        name:"tarjeta exito",
        descuento:50
    }

    ];

    const isCouponValueValid = function (cupons){
        return cupons.name === valueDescuentoCupon;
    };

    const userCupons = cupons.find(isCouponValueValid);

    if (!userCupons) {
        alert("El cupon ingresado no es valido")
    }else {
        var descuento = userCupons.descuento;
        const porcentajeConDescuento = 100 - descuento;
        const precioConDescuento = (valuePrecio * porcentajeConDescuento) / 100 ;

        document.getElementById("InputResultado").value="El precio a pagar es: $" + precioConDescuento;

    }

}