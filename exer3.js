let lado1 = 1
let lado2 = 1
let lado3 = 1
    console.log('TRIÂNGULO')
if(lado1 == lado2 && lado2 == lado3) {
    console.log('Equilátero')
} else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
    console.log('Isósceles')
} else {
    console.log('Escaleno')
}
console.log('NÚMEROS DIGITADOS', lado1, lado2, lado3)