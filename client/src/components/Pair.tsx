import React from "react";
import CryptoIcon from "./CryptoIcon";
import { Pairs } from "../types";
import styled from "react-emotion";

const Span = styled("span")`
  margin-left: 10px;
`;

interface Props {
  pair: Pairs;
}

const Pair = ({ pair }: Props) => {
  return (
    <div>
      <CryptoIcon name={pair.baseCurrency} />
      <Span>{pair.baseCurrency}</Span>
      <Span>/</Span>
      <CryptoIcon name={pair.quoteCurrency} />
      <Span>{pair.quoteCurrency}</Span>
    </div>
  );
};

export default Pair;
