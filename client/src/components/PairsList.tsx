import React from "react";
import { Pairs } from "../types";

interface Props {
  pairs: Pairs[];
}

class PairsList extends React.Component<Props, {}> {
  public render() {
    return (
      <ul>
        {this.props.pairs.map((pair, i) => (
          <li key={i}>{pair.label}</li>
        ))}
      </ul>
    );
  }
}

export default PairsList;
