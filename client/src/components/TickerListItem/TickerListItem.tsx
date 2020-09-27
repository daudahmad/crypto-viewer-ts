import React, { Component } from "react";
import MarketSymbol from "../MarketSymbol";
import { Pairs } from "../../types";
// import styled from "react-emotion";
import ListItem from "@material-ui/core/ListItem";
import { navigate } from "@reach/router";
import { Box, Card, Image, Heading, Text } from "rebass";
import styled from "styled-components";

interface Props {
  pair: Pairs;
  onClick: (marketSymbol: string) => void;
}

class TickerListItem extends Component<Props, {}> {
  // const TickerListItem = ({ pair }: Props) => {
  constructor(props: any) {
    super(props);
  }

  // handleOnClick = (symbol: string) => {
  //   this.props.onClick(symbol);
  // };

  handleOnClick = () => {
    this.props.onClick(this.props.pair.symbol);
    navigate("/marketdetails");
  };

  render() {
    const { pair } = this.props;
    return (
      <Wrapper button onClick={() => this.handleOnClick()}>
        <MarketSymbol name={pair.baseCurrency} />
        <WrapperSpan>{pair.baseCurrency}</WrapperSpan>
        <WrapperSpan>/</WrapperSpan>
        <MarketSymbol name={pair.quoteCurrency} />
        <WrapperSpan>{pair.quoteCurrency}</WrapperSpan>
      </Wrapper>
    );
  }
}

const Wrapper = styled(ListItem)`
  justify-content: center;
`;

const WrapperSpan = styled("span")`
  margin-left: 5px;
`;

export default TickerListItem;
