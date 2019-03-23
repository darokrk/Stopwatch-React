import React from "react";
import ListElement from "../ListElement/ListElement";
import styles from "./ResultList.css";

const ResultList = props => {
  const results = props.results.map((result, i) => (
    <ListElement key={i} result={result} />
  ));
  return <ul className={styles.resultsList}>{results}</ul>;
};

export default ResultList;
