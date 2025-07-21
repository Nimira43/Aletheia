import express from 'express'
import { famousSayings } from './data/famousSaying.js'

const app = express()

app.use(express.static('public'))

app.get('/', (re, res) => {
  res.send('Hello HTMX World!')
})

app.listen(3000)