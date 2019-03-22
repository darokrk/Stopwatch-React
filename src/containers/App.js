import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      display: "",
      times: {
        minutes: 0,
        seconds: 0,
        milliseconds: 0
      },
      results: []
    };
  }
  render() {
    return (
      <div>
        <h1>Stopwatch</h1>
      </div>
    );
  }
}

export default App;
