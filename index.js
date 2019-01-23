const fs = require('fs')

const buf = fs.readFileSync('.git/index')

console.log(buf.length)
console.log('----')