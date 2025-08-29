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
      <script src="/htmx.js" defer></script>
      <title>Aletheia | Career Targets</title>
    </head>
    <body>
      <main>
        <h1>Career Targets</h1>
        <section>
          <form
            id="target-form"
            hx-post="/targets"
            hx-target="#targets"
            hx-swap="beforeend"
          >
            <div>
              <label htmlFor="goal">Target</label>
              <input 
                type="text" 
                id="target" 
                name="trget"
              >
            </div>
            <button type="submit">Add Target</button>
          </form>
        </section>
        <section>
          <ul id="targets">
          ${careerTargets.map(
            (target, index) => `
              <li id="target-${index}">
                <span>${target}</span>
                <button>Delete</button>
              </li>
            `
          ).join('')}
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
