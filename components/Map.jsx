import GoogleMapReact from 'google-map-react' 
import React, { Component } from 'react';
import {FaMapMarker} from 'react-icons/fa'
const AnyReactComponent = ({ text }) => <div>{text}</div>; 

  class Map extends Component { 
    static defaultProps = {
      center: { 
        lat: 59.95,
        lng: 30.33 },
        zoom: 11
        }; 
     
      render() { 
        return ( 
          // Important! Always set the container height explicitly 
          <div className="p-4 mt-36" style={{ height: '100vh', width: '100%' }}> 
            <GoogleMapReact 
              bootstrapURLKeys={{ key: 'AIzaSyDkv132O9Gv8GhpkMbSOQFFpF6UU38s1Uw'}} defaultCenter={this.props.center} defaultZoom={this.props.zoom}
             > 
              
              <AnyReactComponent 
                lat={59.955413}
                lng={30.337844} 
                text=<FaMapMarker className="text-5xl text-red-600" />
              /> 
            </GoogleMapReact> 
          </div> ); 
      } }
      
export default Map;