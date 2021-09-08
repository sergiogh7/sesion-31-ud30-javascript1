var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numero = prompt("Introduzca su DNI (sin letra)");
var letra = prompt("Introduzca la letra de su DNI.");

letra = letra.toUpperCase();

if(numero < 0 || numero > 99999999) {
  console.log("El numero introducido no es valido.");

}else {

  var buscaLetra = letras[numero % 23];

  if(buscaLetra != letra) {
    alert("La letra o el numero introducidos no son correctos.");

  }else {
    alert("El DNI y la letra son correctos.");

  }

}