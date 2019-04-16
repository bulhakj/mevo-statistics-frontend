import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import DoughnutChart from "./Chart";
import styled from "styled-components";
import { geolocated } from "react-geolocated";
import Geolocation from "./Geolocation";

const Wrapper = styled.div`
  width: 400px;
`;

class App extends Component {
  state = {
    nowResponse: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/bikes/now")
      .then(response => {
        console.log(`response ${response.data.length}`);
        this.handleResponseNow(response.data);
      })
      .catch(error => {
        console.log(`Wystąpił błąd: ${error}`);
      });
  }

  handleResponseNow = response => {
    this.setState({
      nowResponse: response
    });
  };

  render() {
    return (
      <div>
        <Wrapper>
          <div>Test</div>
          <DoughnutChart nowResponse={this.state.nowResponse} />
        </Wrapper>
        <p>{this.props.coords && this.props.coords.latitude}</p>
        <Geolocation {...this.props} />
      </div>
    );
  }
}

export const AppWithGeoloc = geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(App);
