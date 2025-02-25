// Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
console.log(lenguagesDeProgramacion);

// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");
console.log(lenguagesDeProgramacion);

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function listarLenguajesDeProgramacion() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
        console.log(lenguagesDeProgramacion[i]);
        
    }
    return;
}

listarLenguajesDeProgramacion();

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function listarLenguajesDeProgramacionInv() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguagesDeProgramacion[i]);
    }
}

listarLenguajesDeProgramacionInv();

// Crea una función que calcule el promedio de los elementos en una lista de números.

function calcularPromedio(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    let promedio = suma / (array.length);
    return promedio; 
}

let array = [1, 2, 3, 4, 5, 6, 7];
console.log(`${calcularPromedio(array)};`);

// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.



// Crea una función que devuelva la suma de todos los elementos en una lista.
// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
