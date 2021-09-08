function palindromo(cadena) {

  var resultado = "La cadena \""+ cadena +"\"";

  var cadena_original = cadena.toLowerCase();

  var espaciado = cadena_original.split("");

  var cadenaSinEspacios = "";

  for(i in espaciado) {

    if(espaciado[i] != " ") {
      cadenaSinEspacios += espaciado[i];

    }

  }

  var letras = cadenaSinEspacios.split("");

  var letrasReves = cadenaSinEspacios.split("").reverse();

  var iguales = true;

  for(i in letras) {

    if(letras[i] == letrasReves[i]) {

    }else {
      iguales = false;

    }

  }

  if(iguales) {
    resultado += " es un palindromo.";

  }else {
    resultado += " no es un palindromo.";

  }

  return resultado;

}

alert(palindromo("La ruta nos aporto otro paso natural"));
alert(palindromo("Torrente"));