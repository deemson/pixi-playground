import { Application } from 'pixi.js'

const app = new Application({
  width: 128,
  height: 128
})
document.body.appendChild(app.view as unknown as Node)