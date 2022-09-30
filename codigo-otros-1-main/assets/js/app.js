const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //tenía selector equivocado
const $b = document.querySelector('.blog'); //tenía selector equivocado
const $l = document.querySelector('.location');

async function displayUser(username) { //se usó función asíncrona
  $n.textContent = 'cargando...';
  try {const response = await fetch(`${usersEndpoint}/${username}`);
  let data = await response.json(); // se genera objeto json de la información de la API
  console.log(data);
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`; //se añadió back thicks para todos estos campos
  $l.textContent = `${data.location}`;
}catch(error){
      handleError(error)
}//se añade try/catch para la función asíncrona
}//async function
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski')//.catch(handleError); método de más si se añada ya un catch al displayUser