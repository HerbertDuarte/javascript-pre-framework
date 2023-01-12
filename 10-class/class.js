// classes servem para organizar o código em pequenos objetosn (que a class retorna) que tem metodos e propriedades que servirão para uma função específica.

class SmoothScroll {
  // CONSTRUCTOR é onde vão estar as principais propriedades e o código que é executado no ínicio dela.

  constructor(){
    this.link = "http"

  }
}

// para gerar objetos com a class sempre deve-se passar antes o parâmetro NEW
const scroll = new SmoothScroll()

// mostra um OBJETO do tipo SmoothScroll que contem uma chave LINK com valor "http"
console.log(scroll)