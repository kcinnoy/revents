import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

function Marker() {
    return (<Icon name='marker' size='big' color='red' />)
}

export default function EventDetailedMap({latLng}) {
    const zoom = 14;
    console.log(latLng)
 
    return (
        <Segment attached='bottom' style={{ padding: 0 }}>
            <div style={{ height: 300, width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAsY9ORF9BZcjwOeofsJHe804XsOvgmfOA' }}
                    center={latLng}
                    zoom={zoom}
                >
                    <Marker lat={latLng.lat} lng={latLng.lng}/>
                    
                </GoogleMapReact>
            </div>
        </Segment>
    );
}
