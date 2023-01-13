// FETCH => puxa informações de uma api, como é uma função assincrona (demorar um tempo para puxar as informações) deve-se usar o THEN() com uma função de retorno, o THEN só executa a função quando a promisse gerada pelo fetch for respondida com sucesso.

fetch('https://ranekapi.origamid.dev/json/api/produto').then( response =>{
  //nesse caso a api está em json( formato de troca de dados entre sistemas ) então deve-se usar o JSON() para conseguir ler as informações. Porém, JSON() também é uma função assincrona, portanto precisa do then para retornar o resultado desejado e não uma promisse.
  return response.json()}).then(jsonRetornado =>{
  console.log(jsonRetornado)
  // jsonRetornado é um objeto como pode ser visto no console.
  document.querySelector('#item1').innerHTML = jsonRetornado[0].nome

})

// => Para enviar informações para o servidor, no FETCH deve-se inserir a url da api ,(virgula) um objeto com algumas opções como POST (método de postagem das informações).

// => HEADERS são configurações sobre o arquivo e os dados.

// => Content-Type deve estar entre aspas por conta da barra (-).

// => BODY é o corpo do envio, ou seja, as informções que serão enviadas.
// => body deve sempre estar em STRING, para isso usamos o JSON.strigify(objeto a ser enviado)

const data = {
  id: "betimobraboSS",
  nome: "betimSS",
  email: "betimSS@gmail.com",
  senha: "123456",
  cep: "123456",
  rua: "Ali Perto",
  numero: "1",
  bairro: "boa vista",
  cidade: "Bahia",
  estado: "Bahia"
};

fetch('https://ranekapi.origamid.dev/json/api/usuario/', {
  method: "POST",
  headers: {
    "Content-Type": "aplication/json"
  },
  body: JSON.stringify(data)
})