const upperNameArrow = name => name.toUpperCase()

// quando há apenas um argumento para função pode-se reirar os ()
// e se há apenas uma linha de código para o retorno, pode-se retirar o RETURN e apagar as {}. obs: apenas retirar o return ou apenas retirar as {} não funciona, se for remover tem que remover os dois.

class Menu {
  constructor(seletor){
    this.menuElement = document.querySelector(seletor)
    this.activeClass = 'active'
  }
  addActiveEvent(){

  //dessa forma foi adicionado um método dos objetos Menu que adiciona um evento de click ao elemento menuElement que é chamado pelo querySelector e depois adiciona e remove uma class que deixa o background-color laranja.

    this.menuElement.addEventListener('click', function(event){
      //dessa forma se eu passar o THIS.ACTIVECLASS dentro do toggle não vai funcionar, porque THIS se refere ao menuElement, não ao objeto Menu, pois o function chamado pelo menuElement cria de callback cria um NOVO THIS que se refere ao objeto que chama a function.
      
      console.log(this)
      event.target.classList.toggle('active')
    })
  }
}

const header = new Menu('.cabecalho')
header.addActiveEvent()
