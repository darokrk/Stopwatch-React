import React, { Component } from "react";
import Button from "../components/Button";
import styles from "./App.css";

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
      <div className={styles.container}>
        <Button text={"Start"} />
        <Button text={"Pause"} />
        <Button text={"Stop"} />
        <Button text={"Result"} />
        <Button text={"Clear"} />
      </div>
    );
  }
}

export default App;
