import { AdvancedMarker } from '@vis.gl/react-google-maps'


const Locationmarker = ({ lat, lng, onMouseEnter, onMouseLeave }) => {
  console.log("MARKER:", lat, lng)

  return (
    <AdvancedMarker
      position={{ lat, lng }} onMouseEnter={() => { console.log('enter'); onMouseEnter() }}
  onMouseLeave={() => { console.log('leave'); onMouseLeave() }}
    >

      <div className='location-marker' >
        <h1>🔥</h1>
       
      </div>
    </AdvancedMarker>
  )
}

export default Locationmarker