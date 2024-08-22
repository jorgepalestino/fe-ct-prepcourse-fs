function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var filteredArray = arrayOfStrings.filter((elemento) => elemento.charAt(0) === "a");
   return filteredArray;
}

module.exports = filter;
