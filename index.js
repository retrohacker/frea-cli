const {spawn} = require('child_process')
const args = process.argv.slice(2)
const env = JSON.parse(JSON.stringify(process.env))
env['npm_config_registry'] = 'http://mdm.blankenship.io'

spawn('npm', args, {
    stdio: [
      process.stdin,
      process.stdout,
      process.stderr
    ], env
})
