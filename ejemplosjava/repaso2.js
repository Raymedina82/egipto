let nombre="ana";
let mensaje= "hola como estas?";
console.log(nombre+mensaje);

let resultado=5+3;
console.log(resultado);

let edad=20;
if (edad >= 18 ) {
    console.log("Eres mayor de edad.");
} 
//postivo y negativo
let numero= 1
if (numero >=1) {
    console.log("positivo");
}
else { 
    console.log ("negativo");
}
//edades rangos
let edades= 59
if (edades <=3) {
    console.log("Es un niño");
}
else if (edades <=17) {
    console.log (" es adolecente")
}
else if (edades <=59 ) {
    console.log ("es adulto");
}
else {
    console.log( " es adulto mayor" );
}
//par e impar
let numer=11
if (numer%2==0) {
    console.log ("par");
}
else {
    console.log ("impar");
}
//calificaciones
let calificaciones= 59
if (calificaciones >=90 ) {
    console.log ("calificacion A");
}
else if ( calificaciones >=80) {
    console.log ("calificacion B");
}
else if ( calificaciones >=70) {
    console.log ("calificacion C");
}

else if ( calificaciones >=60) {
    console.log ("calificacion D");
}

else {
    console.log("calificacion F");
}

// Verificación de usuario y contraseña

let usuario= "RA"
let contraseña=1234
if ( usuario =="RAY") {
    console.log ("autorizado");
}
else {
    console.log ( "NO AUTORIZADO");
}
if ( contraseña ==1235) {
    console.log ("autorizado");
}
else {
    console.log ( "NO AUTORIZADO");
}

//Cálculo del IMC 

let peso=99
let altura= 1.75 
let formula= (peso/altura**2);
console.log (formula);
if (formula <=18.5 ) {
    console.log ("bajo");
}
else if (formula <=24.9 ) {
    console.log ("normal");
}
else if (formula <=27 ) {
    console.log ("sobrepeso");
}
else {
    console.log( "obeso");
}