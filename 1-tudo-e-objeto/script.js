const menu = {
  class: '.principal',
  ativar(){
    // THIS dentro do objeto se refere ao próprio objeto, no caso o MENU. Podendo a partir dele usando o "." acessar suas chaves e metodos.
    const menuElement = document.querySelector(this.class)
    //observando acima o DOCUMENT também é um objeto pois acessamos o metodo querySelector dele.

    // Da mesma forma o CONSOLE também é um objeto e acessamos seu método log.
    console.log(menuElement)

  }
}

menu.ativar()

//digitando uma string qualquer no console e apertando ponto em seguida podemos ver que a string possui métodos(como o método length que diz a largura da string), portanto ela também é um objeto.

//      > "herbert".length
//      > 7

// da mesma forma um ARRAY também é
// até mesmo o false e true
// confirmando a fala de que "TUDO É OBJETO"

// Apenas o UNDEFINED E O NULL que não possuem métodos