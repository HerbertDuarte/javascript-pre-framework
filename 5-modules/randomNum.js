// export default é usado para exporta uma função por padrão sem que seja preciso especificar a função no momento de importar.

export default function numeroAleatorio(){
  // math.random gera um número aleatório de 0 a 1, multiplicando por 100 e arredondando temos um numero aleatório de 0 a 100
  return Math.ceil(Math.random()*100)
}
