import React from "react";
import ListElement from "./ListElement";

const ResultList = props => {
  const results = props.results.map(result => (
    <ListElement key={result} result={result} />
  ));
  return <ul>{results}</ul>;
};

export default ResultList;
