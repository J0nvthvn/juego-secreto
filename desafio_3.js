//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

let peso = 70;
let altura = 1.70;
console.log(`El IMC es de ${calcularIMC(peso,altura)}`)

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function calcularFactorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * calcularFactorial(n - 1);
    }
}

let n = 7;
let factorial = calcularFactorial(n);
console.log(`El factorial de ${n} es ${factorial}`);

//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function conversorMonedaLocal(dolares) {
    let cotizacionDolar = 979.94;
    return cotizacionDolar*dolares;
}

let dolares = 7;
let pesosChilenos = conversorMonedaLocal(dolares);
console.log(`El valor en dólares es: $${dolares}, y el valor en pesos chilenos es $${pesosChilenos}`)

// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function calcularAreaPerimietro(alto, ancho) {
    let area = alto*ancho;
    let perimetro = 2*alto + 2*ancho;

    console.log(`Area: ${area}`);
    console.log(`Perimetro: ${perimetro}`);
}

let alto = 3, ancho = 4;
calcularAreaPerimietro(alto,ancho);

// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function calcAreaPerimCircunf(radio) {
    let pi = 3.14;
    let area = pi*(radio*radio);
    let perimetro = 2*pi*radio;

    console.log(`Area circulo: ${area}`);
    console.log(`Perimetro circulo: ${perimetro}`);
}

let radio = 3;
calcAreaPerimCircunf(radio);

// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tablaDeMultiplicar(numero) {
    for(var i = 1; i <=10; i++ ) {
        var resultado = numero * i;
        //console.log(numero + " * " + i + " = " + resultado);
        console.log(`${numero} * ${i} = ${resultado}`);
    }
}

let numero = 7;
tablaDeMultiplicar(numero);