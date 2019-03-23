import React from "react";
import styles from "./Button.css";

const Button = props => {
  return (
    <button className={styles.button} onClick={props.handleClick}>
      {props.text}
    </button>
  );
};

export default Button;
