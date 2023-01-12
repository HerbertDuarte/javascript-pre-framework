const animais = ['gato', 'cachorro', 'passaro']

// ao invés de fazer assim: 
// const primeiroAnimal = animais[0]

// podemos fazer assim

const [primeiroAnimal, segundoAnimal] = animais
console.log(primeiroAnimal, segundoAnimal)