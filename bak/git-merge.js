console.log('===merge successfully===')
const execa = require('execa')

execa('cp', ['-r', 'git-merge.js', 'test.txt', './bak']).then(res => {
  console.log(res)
})
