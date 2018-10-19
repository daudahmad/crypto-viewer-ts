import React from "react";
import styled from "react-emotion";

interface Props {
  pairSymbol: string;
}

const MarketDetails = ({ pairSymbol }: Props) => {
  return (
    <Wrapper />
  );
};

const Wrapper= styled("div")`
  margin-left: 5px;
`;

export default MarketDetails;