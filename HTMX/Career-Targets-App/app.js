import express from 'express'

const careerTargets = []
const app = express()

app.use(express.urlencoded({
  extended: false
}))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="icon" href="/images/TheFavicon.png">
      <link rel="stylesheet" href="/styles.css">
      <title>Aletheia | Career Targets</title>
      <script src="/htmx.js" defer></script>
    </head>
    <body>
      <main>
        <h1>Career Targets</h1>
        <section>
          <form>
            <div>
              <label>Target</label>
              <input type="text">
            </div>
            <button>Add Target</button>
          </form>
        </section>
        <section>
          <ul id="targets">
            <li id="target">
              <span>Target</span>
              <button>Remove</button>
            </li>
          </ul>
        </section>
      </main>
    </body>
    </html>  
  `)
})

app.post('/targets', (req, res) => {
  const targetText = req.body.target
  careerTargets.push(targetText)
  res.send(`
    <li id="target-${careerTargets.length - 1}">
      <span>${targetText}</span>
      <button>Delete</button>
    </li>
  `)
})

app.listen(3000)
