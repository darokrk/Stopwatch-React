import React from "react";
import styles from "./ListElement.css";

const ListElement = props => {
  return <li className={styles.resultsElement}>{props.result}</li>;
};

export default ListElement;
