import React from "react";
import styles from "./Stopwatch.css";

const Stopwatch = props => {
  return <div className={styles.stopwatch}>{props.timeDisplay()}</div>;
};

export default Stopwatch;
