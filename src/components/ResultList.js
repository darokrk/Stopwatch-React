import React from "react";
import ListElement from "./ListElement";
import styles from "./ResultList.css";

const ResultList = props => {
  const results = props.results.map(result => (
    <ListElement key={result} result={result} />
  ));
  return <ul className={styles.resultsList}>{results}</ul>;
};

export default ResultList;
