#!/usr/bin/env node
const {spawn} = require('child_process')
let args = process.argv.slice(2)
let command = 'npm'
if(args[0] === '--yarn') {
  args = args.slice(1)
  command = 'yarn'
}
const env = JSON.parse(JSON.stringify(process.env))
const dontWrap = [
  'access',
  'adduser',
  'deprecate',
  'dist-tag',
  'login',
  'logout',
  'publish',
  'star',
  'stars',
  'team',
  'token',
  'unpublish',
  'unstar',
  'whoami'
]

if(dontWrap.indexOf(String(args[0]).toLowerCase()) === -1) {
  env['npm_config_registry'] = 'http://mdm.blankenship.io'
}

spawn(command, args, {
  stdio: [
    process.stdin,
    process.stdout,
    process.stderr
  ], env
})
