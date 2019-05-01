import React, { Component } from "react";

import axios from "axios";
import StationListItem from "./StationListItem";

class StationList extends Component {
  state = {
    stationsResponse: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/stations/now?city=sopot")
      .then(response => {
        //   this.handleResponseNow(response.data);
        this.handleResponseStationList(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(`Wystąpił błąd: ${error}`);
      });
  }

  handleResponseStationList = response => {
    this.setState({
      stationsResponse: response
    });
  };

  render() {
    return (
      <div>
        <ul>
          <StationListItem stations={this.state.stationsResponse} />
        </ul>
      </div>
    );
  }
}

export default StationList;
