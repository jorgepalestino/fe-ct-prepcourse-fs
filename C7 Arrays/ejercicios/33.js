function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  /*
  rompecabezas = [];
  var i = 0;
  while (i < str1.length || i < str2.length || i < str3.length) {
    if (str1.length > 0 && i < str1.length) {
      rompecabezas.push(str1.split[i]);
    }
    if (str2.length > 0 && i < str2.length) {
      rompecabezas.push(str2.split[i]);
    }
    if (str3.length > 0 && i < str3.length) {
      rompecabezas.push(str3.split[i]);
    }
    i += 1;
  }
  return rompecabezas.join();
  */
 var stringMasLarga = Math.max(str1.length, str2.length, str3.length);

 var resultado = "";

 for (var i = 0; i < stringMasLarga; i++) {
  if (str1[i]) resultado += str1[i];
  if (str2[i]) resultado += str2[i];
  if (str3[i]) resultado += str3[i];
 }
 return resultado;
}

module.exports = combine;