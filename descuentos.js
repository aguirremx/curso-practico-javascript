// const precioOriginal = 120;
// const descuento = 18;


// function calcularPrecioConDescuento (precio,descuento){
//     const porcentajePrecioConDescuento = 100 - descuento;
//     const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

//     return (precioConDescuento)
// }

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });

// Interactuar con HTML
//  function onClickButtonpPriceDiscount (){
//      const inputPrice = document.getElementById("InputPrice");
//      const priceValue = inputPrice.value;

//      const inputDiscount = document.getElementById("InputDiscount");
//      const discountValue = inputDiscount.value;


//      const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

//      const resultP = document.getElementById("ResultP");
//      resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
//  };

//Cupones
const cupons = [
    "Rob1",
    "Agui2",
    "Sala3",
];

function calcularPrecioConDescuento (precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return (precioConDescuento)
}

 function onClickButtonPriceDiscount (){
      const inputPrice = document.getElementById("InputPrice");
      const priceValue = inputPrice.value;

      const inputCupon = document.getElementById("InputCupon");
      const cuponValue = inputCupon.value;

      let descuento;

      switch(cuponValue){
          case "Rob1":
            descuento = 15;
          break;
          case "Agui2":
            descuento = 30;
          break;
          case "Sala3":
            descuento = 25;
          break;
        }

      const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

      const resultP = document.getElementById("ResultP");
      resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
  }
