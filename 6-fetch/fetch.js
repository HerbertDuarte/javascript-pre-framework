// FETCH => puxa informações de uma api, como é uma função assincrona (demorar um tempo para puxar as informações) deve-se usar o THEN() com uma função de retorno, o THEN só executa a função quando a promisse gerada pelo fetch for respondida com sucesso.

fetch('https://ranekapi.origamid.dev/json/api/produto').then( response =>{
  //nesse caso a api está em json( formato de troca de dados entre sistemas ) então deve-se usar o JSON() para conseguir ler as informações. Porém, JSON() também é uma função assincrona, portanto precisa do fetch para retornar o resultado desejado e não uma promisse.
  return response.json()}).then(jsonRetornado =>{
  console.log(jsonRetornado)
  // jsonRetornado é um objeto como pode ser visto no console.
  document.querySelector('#item1').innerHTML = jsonRetornado[0].nome

})
