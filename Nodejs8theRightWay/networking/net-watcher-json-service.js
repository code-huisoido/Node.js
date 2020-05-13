'use strict'
const fs = require('fs')
const net = require('net')
const filename = process.argv[2]

if (!filename) throw Error('Error: No filename specified.')

net.createServer(connection => {
  console.log('Subscriber connected.')
  const startTips = JSON.stringify({type: 'watching', file: filename}) + '\n'
  connection.write(startTips)
  const watchTips = JSON.stringify({type: 'changed', timestamp: Date.now()}) + '\n'
  const watcher = fs.watch(filename, () => {
    connection.write(watchTips)
  })
  connection.on('close', () => {
    console.log('Subscriber closed.')
    watcher.close()
  })
}).listen(60300, () => {console.log('Listening for subscribers...')})
