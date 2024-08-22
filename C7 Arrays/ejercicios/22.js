function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  const array = [];
  for (var i = 0; i < 11; i++) {
    array.push(i * 6);
  }
  return array;
}

module.exports = tablaDelSeis;
