var user = require('readLine-sync')
var numero = user.questionInt('Digite um numero: ')
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < arr.length; i++) {
    if (numero === arr[i]) {
        console.log(`O numero ${numero} foi encontrado na posição ${i}`)
        return
    }
}
console.log(`O numero ${numero} não foi encontrado`)