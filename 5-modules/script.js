// nessa script importamos as funções, objetos ou consts do script quadrado.js
// [IMPORTANT] só usamos a extensão .js no javascipt puro, nos frameworks não é necessário

import { quadradoArea, quadradoPer, quadradoDiag } from "./quadrado.js";

console.log(quadradoArea(3))
console.log(quadradoPer(3))
console.log(quadradoDiag(3))

// importando uma função default do script randomNum:

// ao importar um default podemos dar qualquer nome para o objeto importado

import teste from './randomNum.js'

console.log(teste())

import circulo from './circulo.js'

console.log(circulo.Area(4))
console.log(circulo.Per(2))
