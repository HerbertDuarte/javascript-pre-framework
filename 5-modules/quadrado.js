// nesse script fazemos as funções, objetos, consts para exportar

export function quadradoArea(lado){
  return lado**2
}

export function quadradoPer(lado){
  return lado*4
}

export function quadradoDiag(lado){
  return lado * (2**(1/2))
}

// posso inserir o EXPORT antes de cada function ou unir elas num único objeto e exportá-lo. como a seguir:

//const quadradoFunc = {
//   quadradoArea,
//   quadradoPer,
//   quadradoDiag
// }
// export default quadradoFunc