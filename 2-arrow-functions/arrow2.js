class Menu {
  constructor(seletor){
    this.menuElement = document.querySelector(seletor)
    this.activeClass = 'active'
  }
  addActiveEvent(){

  //dessa forma foi adicionado um método dos objetos Menu que adiciona um evento de click ao elemento menuElement que é chamado pelo querySelector e depois adiciona e remove uma class que deixa o background-color laranja.

    this.menuElement.addEventListener('click', event =>{

      //usando ARROW FUNCTION não é criado um novo THIS
      console.log(this)
      event.target.classList.toggle(this.activeClass)
    })
  }
}

const header = new Menu('.cabecalho')
header.addActiveEvent()
