
import { MapContainer, Marker, Polygon, Popup, TileLayer, GeoJSON } from 'react-leaflet'
import { statesData } from './data'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
function Mapss(props:any) {
  const {targetState} = props
    const router = useRouter()
    const position = [-2.8182097651959817, 118.00233509522967]
    let specialStates = ['Kalimantan Selatan', 'Lampung', 'Jawa Timur', 'DKI Jakarta', 'Bali', 'Jawa Tengah', 'Jawa Barat', 'Sumatera Barat', 'Daerah Istimewa Yogyakarta', 'Nusa Tenggara Barat', 'Kalimantan Timur', 'Bangka Belitung', 'Sumatera Selatan', 'Sumatera Utara','Sulawesi Selatan']
    let targetStateFix:any;
    if(specialStates.includes(targetState)){
      targetStateFix = targetState
    }

  return (
    <div>
        <MapContainer id='map-container' center={[-2.8182097651959817, 118.00233509522967]} zoom={5} scrollWheelZoom={false} dragging={false}  className='w-full h-[500px] bg-transparent overflow-hidden' zoomControl={false} attributionControl={false} boxZoom={false} doubleClickZoom={false} >
        <GeoJSON data={statesData} style={
          (feature:any) => ({
            
    fillColor: targetStateFix?.includes(feature.properties.state) ? '#6499E9': specialStates.includes(feature.properties.state) ? '#1B3B64' : 'rgb(156 163 175)',
    fillOpacity: 1,
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '',
  })} onEachFeature={
            (feature, layer) => {
                layer.on('click', (e) => {
                    console.log(feature.properties.state)
                    router.push(`/dpd/${feature.properties.slug}`);
                    e.target.setStyle({

                    })
                
                })
                layer.on('mouseover', (e) => {
                    layer.bindTooltip(feature.properties.state)
                    e.target.setStyle({
                        dashArray: "",
                        fillColor: "#9EDDFF",
                        fillOpacity: 1,
                        weight: 2,
                        opacity: 1,
                        color: "white",
                      })
                })
                layer.on('mouseout', (e) => {
                    layer.bindTooltip(feature.properties.state)
                        e.target.setStyle({
                        fillOpacity: 1,
                        weight: 2,
                        dashArray: "",
                        color: 'white',
                        fillColor: targetStateFix?.includes(feature.properties.state) ? '#6499E9': specialStates.includes(feature.properties.state) ? '#1B3B64' : 'rgb(156 163 175)',
                      })
                })
                
            

            }
        }></GeoJSON>
        </MapContainer>
    </div>
  )
}

export default Mapss