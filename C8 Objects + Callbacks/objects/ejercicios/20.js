function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  const posts = objetoUsuario.posts;
  const totalLikes = posts.reduce((suma, post) => {
    return suma + post.likes;
  }, 0);
  return totalLikes;
}

module.exports = sumarLikesDeUsuario;
