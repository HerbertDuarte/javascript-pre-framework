function Area(raio){
  return raio**2*Math.PI
}

function Per(raio){
  return raio*2*Math.PI
}

const circulo = {
  Area,
  Per
}
// para exportar as funções do objeto circle
export default circulo