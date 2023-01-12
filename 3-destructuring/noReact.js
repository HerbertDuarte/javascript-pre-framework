useState = ['blue', color => useState[0] = color ]

// color pega o primeiro valor do array (blue) e setColor pega o segundo que é uma arrow function
const [color, setColor] = useState

//color antes de executar a função
console.log(useState)

// setColor recebe uma função que recebe um argumento e insere no valor de color o próprio argumento 
setColor('red')

// de pois de executar a função que altera o valor de color para 'red'
console.log(useState)