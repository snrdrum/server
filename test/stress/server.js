#!/usr/bin/env node

let delay = require('nanodelay')

let Server = require('../../server')

let app = new Server({
  controlPassword: 'secret',
  subprotocol: '1.0.0',
  supports: '1.0.0',
  backend: 'http://localhost:31339'
})

app.auth((user, token) => {
  return delay(400).then(() => user === '1' && token === 'secret')
})

app.on('error', () => {
  process.exit(1)
})

app.listen()
