const Teclado = 
{
  marca:'redragon', 
  switch: 'blue', 
  cor: 'branco', 
  preco: 200
}
// clone sem spread 
const cloneTeclado2 = Teclado
// [ cloneTeclado2 === Teclado => true ]
console.log(cloneTeclado2)
console.log(cloneTeclado2 === Teclado)

// usando spread para clonar um objeto, de modo que os dois não sejam o mesmo objeto
const cloneTeclado = {...Teclado}
// [ cloneTeclado === Teclado => false ]

console.log(cloneTeclado)
console.log(cloneTeclado === Teclado)

// pode-se também adicionar valores na declaração
const cloneTeclado3 = {...Teclado, modelo:'dragonborn'}

console.log(cloneTeclado3)
