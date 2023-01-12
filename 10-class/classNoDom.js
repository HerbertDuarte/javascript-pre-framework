class SmoothScroll {
  constructor(links){
    this.linkElement = document.querySelectorAll(links)

    this.addClickEvent()
  }

  // passando o parâmetro EVENT para ser retornado no console.log, como se trata de um evento de CLICK o console retorna um PointerEvent que conté propriedades do document
  handleClick(event){
    // PREVENTDEFAULT => previne o comportento padrão do EVENT que nesse caso é o CLICK que tem o comportamento de levar o usuário até o href do link clicado scrollando até a página
    event.preventDefault()
    // currentTarget => o elemento do EventTarget, ou seja o elemento clicado (o link de tag A)
    // getAttribute => seleciona o valor de um atributo (parâmetro HTML) referenciado dentro do parenteses e aspas (o parâmetro HREF dos links)
    const href = event.currentTarget.getAttribute('href')

    // seleciona o objeto pelo metodo queryselector que recebe o HREF que contém o ID de cada DIV
    const div = document.querySelector(href)

    // offsetTop pega a distância do elemento html (no caso DIV) e retorna a distância dele pro topo da página
    const distanciaDoTopo = div.offsetTop
    
    // a função SCROLLTO do objeto WINDOW rola o scroll até o local referenciado pelas chaves top, left, bottom e right. Nesse caso temos o top desejado que é o distanciaDoTopo. Nel também tem a chave behavior que define o comportamento da scrollagem.
    window.scroll({
      top: distanciaDoTopo, 
      behavior : "smooth"
    })

    // [PROBLEMA] por algum motivo o scroll behavior nao funcionou
  }

  addClickEvent(){
    // adiciona um evento de CLICK para todos(ForEach) os elementos do objeto retornado pelo CONSTRUCTOR
    // no ForEach LINK é cada elemento do objeto e o evento adicionado é referenciado no handleClick
    this.linkElement.forEach(link =>{
      link.addEventListener('click', this.handleClick)
    })
  }
}
const scroll = new SmoothScroll("a[href^='#']")

console.log(scroll)

// retorna => SmoothScroll {linkElement: NodeList(3)} com os elementos 'a' do document