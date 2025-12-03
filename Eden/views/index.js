import renderLocation from './components/location.js'

export default function renderLocationsPage(availableLocations, interestingLocations) {
  return (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="icon" href="/TheFavicon.png">
      <link rel="stylesheet" href="/styles.css">
      <script src="/htmx.js" defer></script>
      <title>Eden</title>
    </head>
    <body>
      <header>
        <img src="/logo.png" alt="Logo">
        <h1 class="logo">Eden</h1>
        <p>A galley of places you have been or wish to go...</p>
      </header>
      <main>
        <section class="locations-category">
          <h2>Your Locations</h2>
          <ul id="interesting-locations" class="locations">
            ${interestingLocations.map((location) => renderLocation(location, false)).join('')}
          </ul>
        </section>
        <section class="locations-category">
          <h2>Available Locations</h2>
          <ul id="interesting-locations" class="locations">
            ${availableLocations.map((location) => renderLocation(location)).join('')}
          </ul>
        </section>
      </main>
    </body>
    </html>   
  `)
}