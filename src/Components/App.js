import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import "./App.css";

class App extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:8080/api/bikes/now")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(`Wystąpił błąd: ${error}`);
      });
  }

  render() {
    return <div>Test</div>;
  }
}

export default App;
