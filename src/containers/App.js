import React, { Component } from "react";
import Button from "../components/Button";
import styles from "./App.css";
import { runInThisContext } from "vm";

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
    this.print = this.print.bind(this);
    this.format = this.format.bind(this);
    this.start = this.start.bind(this);
    this.step = this.step.bind(this);
    this.calculate = this.calculate.bind(this);
    this.pause = this.pause.bind(this);
    this.stop = this.stop.bind(this);
    this.result = this.result.bind(this);
    this.clear = this.clear.bind(this);
    this.pad0 = this.pad0.bind(this);
  }

  print() {
    this.setState({
      display: this.format()
    });
  }
  format() {
    let minutes = this.state.times.minutes;
    let seconds = this.state.times.seconds;
    let milliseconds = this.state.times.milliseconds;
    return `${this.pad0(minutes)}:${this.pad0(seconds)}:${this.pad0(
      Math.floor(milliseconds)
    )}`;
  }

  pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
      result = `0${result}`;
    }
    return result;
  }

  start() {
    const running = this.state.running;
    if (!running) {
      this.setState({
        running: true
      });
      this.watch = setInterval(() => this.step(), 10);
    }
  }
  step() {
    const running = this.state.running;
    if (!running) return;
    this.calculate();
    this.print();
  }
  calculate() {
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
  }
  stop() {
    this.setState({
      running: false
    });
    clearInterval(this.watch);
  }
  resetWatch() {
    this.setState({
      running: false,
      times: {
        minutes: 0,
        seconds: 0,
        milliseconds: 0
      }
    });
  }
  result() {
    let data = this.state.results;
    let dataEl = this.format(this.state.times);
    this.setState({
      results: [...data, dataEl]
    });
  }
  clear() {
    this.setState({
      results: []
    });
  }

  pause() {
    this.setState({
      running: false
    });
    clearInterval(this.watch);
  }

  stop() {
    this.setState({
      running: false,
      times: {
        minutes: 0,
        seconds: 0,
        milliseconds: 0
      }
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <Button text={"Start"} handleClick={this.start} />
        <Button text={"Pause"} handleClick={this.pause} />
        <Button text={"Stop"} handleClick={this.stop} />
        <div>{this.format()}</div>
        <Button text={"Result"} />
        <Button text={"Clear"} />
      </div>
    );
  }
}

export default App;
