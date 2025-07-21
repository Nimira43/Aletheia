import express from 'express'
import { famousSayings } from './data/famousSaying.js'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="/TheFavicon.png">
        <script src="/htmx.js" defer></script>
        <link rel="stylesheet" href="/styles.css">
        <title>Aletheia - HTMX Mini Project</title>
      </head>
      <body>
        <header id="main-header">
          <img src="/hero.png" alt="hero">
          <h1 class="logo">Aletheia - HTMX Mini Project</h1>
        </header>
        <main>
          <p>HTMX lets HTML handle AJAX, WebSockets, and more — no JavaScript frameworks, just markup magic.</p>
          <button hx-get="/info">Discover More</button>
        </main>
      </body>
    </html> 
  `)
})

app.get('/info')

app.listen(3000)
console.log(famousSayings)