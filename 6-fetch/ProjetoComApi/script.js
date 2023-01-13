// a função async sinaliza que oque vai acontecer é assincrono.
const qlq = new URLSearchParams(window.location.search)
const posid = qlq.get('id')

async function getDataPost(){

  const url = "https://jsonplaceholder.typicode.com/posts"

  // o away deve ser usado sempre onde tiver função assincrona, como await e fetch
  const response = await fetch(url)

  const data = await response.json()

  const gerarPost = dados =>{
    
    let loading = document.querySelector('.loading')
    let posts = document.querySelector('#posts')
    let div = document.createElement('div')
    let div2 = document.createElement('div')
    let btn = document.createElement('a')
    let titulo = document.createElement('h2')
    let paragrafo = document.createElement('p')
    loading.classList.add('hide')
    
    for(let i in data){

      titulo.innerText = data[i].title
      paragrafo.innerText = data[i].body
      btn.setAttribute('href', `posts.html?id= ${data[i].id}`)
    
      div.appendChild(titulo)
      div.appendChild(paragrafo)
      div2.appendChild(div)
      posts.innerHTML += div2.innerHTML
      posts.append(btn)
    }

  }
  gerarPost()
}

async function gerarComentarios(){

}
if(!posid)getDataPost()
else{
  gerarComentarios()
}