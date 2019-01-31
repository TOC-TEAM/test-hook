const chalk = require('chalk')
const { spawn } = require('child_process')
const path = require('path')
const fs = require('fs')

console.log(
  chalk.blue(
    'Merge successfully.\n' + 'Will copy lasted code to neitui_webapp...'
  )
)

const target = path.resolve(process.cwd(), '..', 'mkdir/temp')
if (fs.existsSync(target)) {
  const subprocess = spawn('cp', ['-r', './*', target])

  subprocess.on('close', code => {
    if (code === 0) {
      console.log(chalk.green('Copy successfully.'))
    } else {
      console.error(chalk.red('Copy failed, check what happend manually!'))
    }
  })
}
