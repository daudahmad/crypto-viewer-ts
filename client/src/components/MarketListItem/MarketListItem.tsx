import React from "react";
import MarketSymbol from "../MarketSymbol";
import { Pairs } from "../../types";
import styled from "react-emotion";
import ListItem from "@material-ui/core/ListItem";

interface Props {
  pair: Pairs;
}

const MarketListItem = ({ pair }: Props) => {
  return (
    <Wrapper button>
      <MarketSymbol name={pair.baseCurrency} />
      <WrapperSpan>{pair.baseCurrency}</WrapperSpan>
      <WrapperSpan>/</WrapperSpan>
      <MarketSymbol name={pair.quoteCurrency} />
      <WrapperSpan>{pair.quoteCurrency}</WrapperSpan>
    </Wrapper>
  );
};

const Wrapper = styled(ListItem)`
  justify-content: center;
`;

const WrapperSpan = styled("span")`
  margin-left: 5px;
`;

export default MarketListItem;
