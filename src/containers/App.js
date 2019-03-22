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

  print = () => {
    this.setState({
      display: this.format()
    });
  };

  format = () => {
    let minutes = this.state.times.minutes;
    let seconds = this.state.times.seconds;
    let milliseconds = this.state.times.milliseconds;
    return `${this.pad0(minutes)}:${this.pad0(seconds)}:${this.pad0(
      Math.floor(milliseconds)
    )}`;
  };

  pad0 = value => {
    let result = value.toString();
    if (result.length < 2) {
      result = `0 + ${result}`;
    }
    return result;
  };

  start = () => {
    const running = this.state.running;
    if (!running) {
      this.setState({
        running: true
      });
      this.watch = setInterval(() => this.step(), 10);
    }
  };

  step = () => {
    const running = this.state.running;
    if (!running) return;
    this.calculate();
    this.print();
  };

  calculate = () => {
    let milliseconds = this.state.times.milliseconds;
    let seconds = this.state.times.seconds;
    let minutes = this.state.times.minutes;

    milliseconds += 1;
    if (milliseconds >= 100) {
      seconds += 1;
      milliseconds = 0;
    }
    if (seconds >= 60) {
      minutes += 1;
      seconds = 0;
    }
    this.setState({
      times: {
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds
      }
    });
  };

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
