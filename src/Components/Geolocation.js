import React from "react";

class Geolocation extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Twoja przeglądarka nie obsługuje lokalizacji</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Lokalizacja nie została włączona</div>
    ) : this.props.coords ? (
      <table>
        <tbody>
          <tr>
            <td>latitude</td>
            <td>{this.props.coords.latitude}</td>
          </tr>
          <tr>
            <td>longitude</td>
            <td>{this.props.coords.longitude}</td>
          </tr>
          <tr>
            <td>altitude</td>
            <td>{this.props.coords.altitude}</td>
          </tr>
          <tr>
            <td>heading</td>
            <td>{this.props.coords.heading}</td>
          </tr>
          <tr>
            <td>speed</td>
            <td>{this.props.coords.speed}</td>
          </tr>
        </tbody>
      </table>
    ) : (
      <div>Getting the location data&hellip; </div>
    );
  }
}

export default Geolocation;
