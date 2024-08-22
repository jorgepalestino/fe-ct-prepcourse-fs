function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  var array2 = [];
  for (var i = 0; i < array.length; i++) {
    array2.push(cb(array[i]));    
  }
  return array2;
}

module.exports = map;
