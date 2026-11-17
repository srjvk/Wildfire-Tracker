# Geo-Wildfire

A React and Vite web application that displays active wildfire events on a Google Map using NASA's Earth Observatory Natural Event Tracker (EONET) API.

## Features

- Fetches natural event data from NASA EONET
- Filters events to the wildfire category
- Displays wildfire locations as markers on Google Maps
- Shows event ID and title when a marker is hovered
- Includes a loading indicator while event data is fetched

## Tech Stack

- React 19
- Vite 8
- Google Maps (`@vis.gl/react-google-maps`)
- Bootstrap 5
- NASA EONET API
- Oxlint

## Prerequisites

- Node.js 18 or newer
- npm
- A Google Maps JavaScript API key with the Maps JavaScript API enabled
- A Google Maps map ID

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/srjvk/Wildfire-Tracker.git
   cd Wildfire-Tracker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Open `componenets/Map.jsx` and replace the placeholder values:

   ```javascript
   const apiKey = 'YOUR_API_KEY'
   ```

   ```javascript
   <GoogleMap
     defaultCenter={center}
     defaultZoom={zoom}
     gestureHandling={'greedy'}
     mapId="YOUR_MAP_ID"
   >
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite in your browser.

## Available Scripts

- `npm run dev` — start the Vite development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run Oxlint
- `npm start` — start the development server

## Data Source

Wildfire event data is retrieved from NASA EONET:

- [NASA EONET API](https://eonet.gsfc.nasa.gov/api/v2.1/events)

The application checks for event category ID `8`, which corresponds to wildfires in the EONET response.

## Project Structure

```text
Wildfire-Tracker/
├── componenets/         # Map, marker, information box, loader, and navbar components
├── public/              # Public static assets
├── src/
│   ├── App.jsx          # Fetches EONET event data and renders the app
│   ├── App.css
│   ├── index.css
│   └── main.jsx         # React entry point
├── index.html
├── package.json
└── vite.config.js
```
