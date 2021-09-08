var num = 25;

var resultado = parOimpar(num);

alert("El numero " + num + " es "+ resultado);

function parOimpar(num) {

  if(num % 2 == 0) {
    return "un numero par.";

  }else {
    return "un numero impar.";

  }

}