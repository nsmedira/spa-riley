import React, { useEffect } from "react"
import { Link } from 'gatsby' 

// COMPONENTS
import SEO from "../components/seo"
import VerticalCenterFlex from "../components/layout/vertical-center-flex"
import Window from "../components/layout/window"
import { Container } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'

const Contact = () => {

  
  var scriptText = `function initMap () {

    console.log('initMap() has been called')

    const lat = 41.419795
    const lng = -81.339451

    // the location of Spa Riley
    var coordinates = {
      lat,
      lng
    }

    // the map, centered at uluru
    var map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 15,
        center: coordinates,
        gestureHandling: 'none',
        zoomControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        draggableCursor: 'pointer',
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#52796f"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#354f52"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1b1b1b"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#cad2c5"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#4e4e4e"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#255957"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#2f3e46"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3d3d3d"
              }
            ]
          }
        ]
      }
    )

    map.addListener("click", () => {
      window.open(\`https://www.google.com/maps/dir/?api=1&destination=\${lat}%2C\${lng}\`)
    })

    // the marker, positioned at uluru
    var marker = new google.maps.Marker({
      position: coordinates,
      map: map
    })

  }`

  const idInit = "initMap"
  const idLib = "googleMaps"
  const idRedraw = "redraw"

  const appendMapFunction = () => {
    const initFunction = document.createElement('script')
    initFunction.id = idInit
    initFunction.text = scriptText
    document.body.appendChild(initFunction)
  }

  const importGoogleMaps = () => {
    const googleMaps = document.createElement('script')
    googleMaps.id = idLib
    googleMaps.defer = true
    googleMaps.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_MAPS_API_KEY}&callback=initMap`
    document.body.appendChild(googleMaps)
  }

  const redrawMap = () => {
    const redrawScript = document.getElementById(idRedraw)
    if(redrawScript){
      redrawScript.parentNode.removeChild(redrawScript)
    }
    const drawMap = document.createElement('script')
    drawMap.text = "initMap()"
    drawMap.id = idRedraw
    document.body.appendChild(drawMap)
  }

  useEffect( () => {

    const mapsScript = document.getElementById(idLib)
    
    // provide map init function if not already inserted
    if(!document.getElementById(idInit)){
      appendMapFunction()
    }

    if(mapsScript){
      
      // google maps already imported, so if we get here then the component has rerendered and the callback built into the library import will not draw the map so redraw it
      redrawMap()

    } else {

      // google maps has not already been imported. import google maps
      importGoogleMaps()

    }

  })
  
  return (

    <>

      <SEO 
        title="Contact"
        path="/contact" 
      />

      <Window className="window-contact">

        <div className="super-container">

          <VerticalCenterFlex>

            <Container className="p-0 text-white bg-color-0">
                
                  <Row className="mx-0">

                    <Col>

                      <Row>
                        {/* CONTACT INFO */}
                        <Col>
              
                          <div className="m-5">
                            <h1>Book Now</h1>
                            <p style={{margin: 0}}>16490 Chillicothe Rd.</p>
                            <p style={{margin: 0}}>Chagrin Falls, OH, 44023</p>
                            <p style={{margin: 0}}><Link className="text-white" to="mailto:rdw7795@gmail.com">rdw7795@gmail.com</Link></p>
                            <p style={{margin: 0}}>(440) 667-9617</p>
                          </div>
              
                        </Col>
              
                        {/* HOURS */}
                        <Col>
              
                          <div className="m-5">
                            <h1>Hours</h1>
                            <p style={{margin: 0}}>Tues-Thurs: 11am - 4pm</p>
                            <p style={{margin: 0}}>Sat: 10am - 5pm</p>
                            <p style={{margin: 0}}>Sun: 10am - 5pm</p>
                          </div>
              
                        </Col>
                      </Row>

                      <Row>
                        <Col className="mx-5">
                          <p>Click anywhere on the map for driving directions.</p>
                        </Col>
                      </Row>

                    </Col>
        
                  </Row>
        
                  <Row className="mx-0">
          
                    {/* 09.01.20: MAP DIV */}
                    <div id="map" style={{height: 400, width: "100%"}}></div>
          
                  </Row>
                          
            </Container>

          </VerticalCenterFlex>

        </div>

      </Window>

    </>

  )

}

export default Contact