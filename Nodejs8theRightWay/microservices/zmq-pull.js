'use strict'
const puller = zmq.socket('pull')

puller.on('message', data => {
  const job = JSON.parse(data.toString())

  console.log(`Handling ${job.details}`)
})