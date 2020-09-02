const client = require('scp2')
const spinner = require('ora')()

const runCommand = (command, args) => {
  const cp = require('child_process')
  return new Promise((r, j) => {
    const executedCommand = cp.spawn(command, args, {
      stdio: 'inherit',
      shell: true,
    })
    executedCommand.on('error', error => {
      j(error)
    })
    executedCommand.on('exit', code => {
      if (code === 0) {
        r()
      } else {
        j()
      }
    })
  })
}

;(async () => {
  await runCommand('npm', ['run', 'build'])
  spinner.start('代码发布中...')
  client.scp(
    'dist',
    {
      port: 22,
      host: '119.45.142.60',
      username: 'root',
      path: '/root/nginx/www/html/sui-design',
      privateKey: require('fs').readFileSync('/Users/chuck/.ssh/id_rsa'),
    },
    err => {
      if (!err) {
        spinner.succeed('代码发布成功!')
      } else spinner.fail(err.message)
    },
  )
})()
