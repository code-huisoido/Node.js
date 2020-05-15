'use strict'

const pusher = zmq.socket('push')

for (let i = 0; i < 100; i++) {
  pusher.send(JSON.stringify({
    details: `Details about job ${i}.`
  }))
}


