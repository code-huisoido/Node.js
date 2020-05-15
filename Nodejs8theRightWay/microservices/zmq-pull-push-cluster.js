'use strict'
const cluster = require('cluster')
const zmq = require('zeromq')

const numWorkers = require('os').cpus().length

if (cluster.isMaster) {

  const pusher = zmq.socket('push').bind('ipc://producer.ipc')
  const puller = zmq.socket('pull').bind('ipc://consumber.ipc')

  let canWorkProcess = 0
  puller.on('message', (message) => {
    message = JSON.parse(message)
    if (message.type === 'ready') {
      canWorkProcess += 1
      console.log(`process${message.pid} is ready.`)

      if (canWorkProcess === numWorkers) {
        for (let i = 1; i <= 30; i++) {
          pusher.send(JSON.stringify({
            job: `job ${i}`
          }))
        }
      }
    } else if (message.type === 'result') {
      console.log(`id: ${message.pid} result: ${message.details}`)
    }
  })

  for (let i = 0; i < numWorkers; i++) {
    cluster.fork()
  }
} else {
  const puller = zmq.socket('pull').connect('ipc://producer.ipc')
  const pusher = zmq.socket('push').connect('ipc://consumber.ipc')  

  let result = {
    pid: process.pid,    
    type: 'ready'
  }
  pusher.send(JSON.stringify(result))
    
  puller.on('message', (message) => {
    message = JSON.parse(message)
    result.type = 'result'
    result.details = `${message.job} finished`
    pusher.send(JSON.stringify(result))
  })
   
}
