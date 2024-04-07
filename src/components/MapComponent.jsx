import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class MyContainer extends Component {
    render() {
        const { data } = this.props;
        const mapStyles = {
            width: "100%",
            height: "450px",
        };

        return (
            <Map
                google={this.props.google}
                zoom={6}
                style={mapStyles}
                initialCenter={{ lat: 9.9252, lng: 78.1198 }}
            >
                {data.map((hotel, index) => (
                    <Marker
                        key={index}
                        position={{ lat: hotel.lat, lng: hotel.lng }}
                        title={hotel.name}
                        icon={{
                            // url: require("./checklist.png"),
                            scaledSize: new window.google.maps.Size(40, 40),
                        }}
                    />
                ))}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBqPUe5wfWgGNOBrNOJqwCdpcknw0tX3DQ",
})(MyContainer);