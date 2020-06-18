import {fatorial} from './fatorial'

console.log('n-fatorial ===')
const argv = require('yargs').demandOption('num').argv

const num = parseInt(argv.num)
console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)
