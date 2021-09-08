var valores = [true, 5, false, "hola", "adios", 2];

// Encuentra el String mayor
var max = 0;
var stringMayor;

valores.forEach( function( val ) {

  if( ( typeof( val ) == 'string' ) && ( val.length > max ) ) {
    max = val.length;
    stringMayor = val;
  }

} );

console.log(stringMayor);

// Valores booleanos
var valor1 = valores[0];
var valor2 = valores[2];

// Resultado TRUE
var resultado = valor1 || valor2;
console.log(resultado);

// Resultado FALSE
resultado = valor1 && valor2;
console.log(resultado);

// Operar
var num1 = valores[1];
var num2 = valores[5];

// Suma
var suma = num1 + num2;
console.log(suma);

// Resta
var resta = num1 - num2;
console.log(resta);

// Multiplica
var multiplicacion = num1 * num2;
console.log(multiplicacion);

// Divide
var division = num1 / num2;
console.log(division);

// Modulo
var modulo = num1 % num2;
console.log(modulo);