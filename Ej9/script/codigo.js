function informacion(cadena) {

  var resultado = "La cadena \"" + cadena + "\"";

  if(cadena == cadena.toUpperCase()) {
    resultado += " esta formada por mayusculas.";

  }else if(cadena == cadena.toLowerCase()) {
    resultado += " esta formada por minusculas.";

  }else {
    resultado += " esta formada por mayusculas y minusculas.";

  }

  return resultado;
  
}

alert(informacion("REAL"));
alert(informacion("madrid"));
alert(informacion("Campeon!!!"));