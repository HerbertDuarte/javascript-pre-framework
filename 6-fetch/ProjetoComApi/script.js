// a função async sinaliza que oque vai acontecer é assincrono.
const qlq = new URLSearchParams(window.location.search)
const posid = qlq.get('id')
const url = "https://jsonplaceholder.typicode.com/posts"


async function getDataPost(){


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
      btn.setAttribute('href', `posts.html?id=${data[i].id}`)
    
      div.appendChild(titulo)
      div.appendChild(paragrafo)
      div2.appendChild(div)
      posts.innerHTML += div2.innerHTML
      posts.append(btn)
    }
  }
  gerarPost()
}
function createComment(comment){

  let posts = document.querySelector('#posts')
  let div = document.createElement('div')
  let titulo = document.createElement('h2')
  let paragrafo = document.createElement('p')

  
  titulo.innerText = comment.name
  paragrafo.innerText = comment.body

  div.appendChild(titulo)
  div.appendChild(paragrafo)
  posts.appendChild(div)
}

async function gerarComment(response){
  let comments = await response.json()

  comments.map(createComment)
}

async function inserirComentario(comentario){
  const res = await fetch(`${url}/${posid}/comments/`,{
    method: 'POST',
    body: comentario,
    headers: {
      'Content-type': 'application/json',
    },
  })

  const data = await res.json()
  createComment(data)
}

async function gerarPagina(id){
  const responseComments = await fetch(`${url}/${id}/comments/`)

  gerarComment(responseComments)
  
  
  let form = document.querySelector('#form')
  let loading = document.querySelector('.loading')
  
  form.classList.remove('hide')
  loading.classList.add('hide')
  
  form.addEventListener('submit', e =>{
    e.preventDefault()

    let name = document.querySelector('#email').value
    let body = document.querySelector('#body').value
    
    let comentario = {
      name,
      body,
    }

    comentario = JSON.stringify(comentario)

    inserirComentario(comentario)

    document.querySelector('#email').value = ''
    document.querySelector('#body').value = ''

  })  
}
if(!posid){
  getDataPost()
}
else{
  gerarPagina(posid)
}