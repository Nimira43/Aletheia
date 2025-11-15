import express from 'express'
import { AVAILABLE_LOCATIONS } from './data/availableLocations'
import renderLocationsPage from './views/index.js'
import renderLocation from './views/components/location.js'

const app = express()
const INTERESTING_LOCATIONS = []

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  const availableLocations = AVAILABLE_LOCATIONS.filter(
    (location) => !INTERESTING_LOCATIONS.includes(location)
  )
  res.send(renderLocationsPage(availableLocations, INTERESTING_LOCATIONS))
})