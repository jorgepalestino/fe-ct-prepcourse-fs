function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  if (idioma === "aleman") {
    return "Guten Tag!";
  }
  if (idioma === "mandarin") {
    return "Ni Hao!";
  }
  if (idioma === "ingles") {
    return "Hello!";
  }
  if (idioma === undefined) {
    return "Hola!";
  }
  else {
    return "Hola!";
  }
}

module.exports = saludo;
