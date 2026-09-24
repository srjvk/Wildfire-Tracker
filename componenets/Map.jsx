import {APIProvider, Map as GoogleMap} from '@vis.gl/react-google-maps'
import Locationmarker from './Locationmarker'
import { LocationInfoBox } from './LocationInfoBox'
import { useState, useMemo } from 'react'


export const Map = ({eventData, center = {
    lat: 56.225112546250237,
    lng: -104.66248120168656
  },
  zoom= 8}) => {

    const [locationInfo, setLocationInfo] = useState(null)

    const markers = useMemo(() => eventData.map(ev => {
  if (ev.categories[0].id === 8) {
    return (
      <Locationmarker
        key={ev.id}
        lat={ev.geometries[0].coordinates[1]}
        lng={ev.geometries[0].coordinates[0]}
        onMouseEnter={() => setLocationInfo({ id: ev.id, title: ev.title })}
        onMouseLeave={() => setLocationInfo(null)}
      />
    )
  }
  return null
}), [eventData])
  const apiKey = 'YOUR_API_KEY'





  
  return (
    <div className='map'>
      <APIProvider apiKey={apiKey}>
        <GoogleMap defaultCenter={center} defaultZoom={zoom} gestureHandling={'greedy'} mapId="YOUR_MAP_ID"
      >{markers}</GoogleMap>
      {locationInfo && <LocationInfoBox info={locationInfo} />}


     
      
      </APIProvider>

      
    </div>
  )
}
