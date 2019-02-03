import * as express from 'express'

class App {
  public express

  constructor () {
    this.express = express()
    this.express.use(express.static('public'))
  }
}

export default new App().express
