import express from 'express'
import { famousSayings } from './data/famousSaying.js'

const app = express()

app.use(express.urlencoded({extended: false}))
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
          <form hx-post="/note">
            <p>
              <label for="note">New Note:</label>
              <input type="text" id="note" name="note" />
            </p>
            <p>
              <button>Save Note</button>
            </p>
          </form>
          <ul>
            ${famousSayings.map((info) => `<li>${info}</li>`).join('')}
          </ul>
        </main>
      </body>
    </html> 
  `)
})

app.post('/note', (req, res) => {
  const enteredNote = req.body.note
  famousSayings.unshift(enteredNote)
})

app.listen(3000)
