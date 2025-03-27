// let nombre = "Diego";
// var nombre = "juan";
// var nombre = "pepe";
// nombre = "Diego";

// let nombre = "Diego";
// console.log(nombre); // Diego

// const apellido = "Santurtun"; // La variable const no se puede reasignar
// apellido = "Lopez"; // Error
// console.log(apellido); // Santurtun

//tipo de datos
//datos primitivos
console.log(`---------------------datos primitivos---------------------`);
let str = "string";
console.log(str, typeof str); // string string

let num = 2;
console.log(num, typeof num); // 2 number

let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt, typeof bigInt); // 1234567890123456789012345678901234567890 bigint

let bool = true;
console.log(bool, typeof bool); // true boolean

let undefin;
console.log(`~undefin:`, typeof undefin); // undefined undefined

let nul = null;
console.log(`~nul:`, typeof nul); // null object

let symbol = Symbol("id");
console.log("symbol:", typeof symbol); // symbol Symbol

let n1 = 1;
let n2 = 1;
console.log(`~n1 === n2:`, n1 === n2); // true

let symbol1 = Symbol("id");
let symbol2 = Symbol("id");
console.log(`~symbol1 === symbol2:`, symbol1 === symbol2); // false

//datos complejos
console.log(`---------------------datos complejos---------------------`);
const arr = [1, 2, 3]; //los datos complejos siempre se utilizan con const, porque se pueden modificar y no se puede reasignar.
console.log(`~arr`, typeof arr); // object
console.log(`~arr`, arr); // [1, 2, 3]
console.log("hago .push(4)");
arr.push(4);
console.log(`~arr`, arr); // [1, 2, 3, 4]
console.log(`~arr en 1:`, arr[1]); // 2
arr[1] = 5;
console.log(`~arr en 1:`, arr[1]); // 5

const obj = {
    nombre: "Diego",
    apellido: "Santurtun"
};
console.log(`~obj`, typeof obj); // object
console.log(`~obj`, obj); // { nombre: 'Diego', apellido: 'Santurtun' }
//De la siguiente forma se puede modificar el objeto o agregarle propiedades
obj.nombre = "Juan";
obj.edad = 30;
console.log(`~obj`, obj); // { nombre: 'Juan', apellido: 'Santurtun', edad: 30 }

// metodos de strings
let str1 = "Hola Mundo_________";
console.log(`~str1`, str1.length);
console.log(`~str1`, str1.toUpperCase());

//funciones
saludar();
function saludar() {
    console.log("~saludar ~ Hola Mundo");
};

// arrow functions
//no se puede llamar a la funcion antes de declararla
// saludar2(); // Error
const saludar2 = () => {
    console.log("~saludar2 ~ Hola Mundo");
};
saludar2();