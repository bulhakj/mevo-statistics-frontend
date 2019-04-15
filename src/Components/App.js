import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import "./App.css";
import DougnutChart from "./Chart";

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
        this.handleMapBatteries(response.data);
        this.handleFilterLowBatteries(this.state.allBatteries);
        this.handleFilterMediumBatteries(this.state.allBatteries);
        this.handleFilterHighBatteries(this.state.allBatteries);
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
        <div>Test</div>
        <DougnutChart nowResponse={this.state.nowResponse} />
      </div>
    );
  }
}

export default App;
