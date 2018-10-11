import React from "react";

interface Props {
  pairs: [];
}

class PairsList extends React.Component<Props, {}> {
  public render() {
    return (
      <ul>
        {this.props.pairs.map((pair, i) => (
          <li key={i}>{pair}</li>
        ))}
      </ul>
      // <ul>
      //     <li>BTC/USD</li>
      //     <li>BTC/USD</li>
      //     <li>BTC/USD</li>
      // </ul>
    );
  }
}

export default PairsList;
