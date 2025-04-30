let nombre="juan";
let edad= 25;
let peso= 80.2;
let soltero=true;
let pasatiempos= [ "futbol", "tenis", "cine", "teatro" ];
console.log(pasatiempos[3]);
let calificaciones= [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

let comida= { desayuno: "huevos revueltos", comidas: "mole", cena:"cereal"  };

let supermercado= { limpieza: "cloro", precio:10, descuento:true, puntos:2.5};

let frutas= [ "manzana", "platano", "pera", "fresa", "melon"];
let paises= [ "mexico", "peru", "cuba", "venezuela", "colombia"];
let moneda= [ "dolar", "dolar canadiense", "peso colombiano", "soles", "peso venezolano"];
console.log(frutas[2], frutas [4]);
console.log(paises [3], paises [0]);
console.log(moneda [1], moneda [3]);

let fruta= { manzana: 20, platano: 15, pera: 25, fresa: 50, melon:35 };
console.log(fruta.manzana);
console.log(fruta.melon);
let pais= { mexico: "cdmx", peru:"lima", cuba:"la habana", venezuela:"caracas", colombia:"bogota"};
console.log(pais.mexico);
console.log(pais.venezuela);
let monedas= { dolar:19.58, dolar_canadiense: 14.12, peso_colombiano: 0.004, soles: 5.32, peso_venezolano:0.23};
console.log(monedas.peso_colombiano);
console.log(monedas.peso_venezolano);


console.log(pasatiempos);
console.log(calificaciones);
console.log(comida);
console.log(supermercado);
console.log(fruta);
console.log(pais);
console.log(monedas);

let computadora={categoria:["escritorio", "laptop", "all in one"], cpu:[ "intell", "amd", "qualcomm"], marca:[ "hp", "dell", "assus", "lenovo", "toshiba"], precios: [ 5000,10000,15000]};
console.log(computadora);
console.log(computadora.marca [2]);
console.log(computadora.marca [0]);


let automovil={ marca:[ "ford", "toyota", "kia"], transmision:["automatica", "manual", "hibrida"], modelos:["mustang", "yaris", "ev6"], precios: [10000, 20000, 25000], tipo:[ "electrico","gas", "hibrido"]};
console.log(automovil);
console.log(automovil.precios[0]);
console.log(automovil.transmision[1]);
