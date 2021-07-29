// Código del cuadrado

console.group("Cuadrado");


function perimetroCuadrado (lado) {
    return lado * 4;
} 


function areaCuadrado (lado) {
    return lado * lado;
} 

console.groupEnd();

// Código del triángulo

console.group("Triangulo");


function perimetroTriangulo (lado1, lado2, lado3) {
    return lado1 + lado2 + lado3
}

function areaTriangulo (base, altura){
    return (base * altura)/2;
}


console.groupEnd();

// Código del círculo 

console.group("Círculo");

function diametroCirculo (radio) {
    return radio * 2;
}

const pi = Math.PI;


function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}; 

function areaCirculo (radio) {
    return  pi * (radio * radio)

};

console.groupEnd ();


// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado (value);
    alert(perimetro);
};

function calcularAreaCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado (value);
    alert(area);
};

// En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

// La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
// La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
// La función debe retornar la altura del triángulo.

function alturaTriangulo (lado1,lado2,base) {
    if (lado1 === lado2 && lado1 != base) {
        alert("Es un triángulo Isóceles");
        
        const altura = Math.sqrt(lado1**2 - base**2/4);
        console.log(altura)
    }
    else {
        alert("No esun tríangulo Isóceles")
    }
}