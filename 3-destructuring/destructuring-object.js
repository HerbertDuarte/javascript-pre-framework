// const handleMove = event =>{
  // const clientY = event.clientY
  // const clientX = event.clientX
  // console.log(clientX, clientY)
//   console.log(event)
// }

// event é o evento que está acontecendo no caso como a função é chamada com o movimento do mouse, event se torna um MOUSEEVENT.

// ao invés de usar o event dessa forma, pode-se usar o metodo de descontrução dele, como a seguir:

const handleMove = event =>{
  // dessa forma é chamada apenas os valores das chaves clientY e clientX do objeto EVENT
  const {clientY, clientX} = event
  console.log(clientX, clientY)
}

// ainda pode-se usar o destructuring da seguinte forma:
// pois aqui pelo observado, o event é um argumento padrão da função
// const handleMove = ({clientX,clientY}) =>{
//   console.log(clientX, clientY)
// }
document.addEventListener('mousemove', handleMove)