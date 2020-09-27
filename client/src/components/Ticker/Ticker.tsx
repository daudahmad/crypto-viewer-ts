import React, { Fragment } from "react";
import { TickerDetails } from "../../types";
import styled from "react-emotion";
import { Box, Card, Image, Heading, Text } from "rebass";

interface Props {
  tickerDetails: TickerDetails;
}

const Ticker = ({ tickerDetails }: Props) => {
  // const tickerState = tickerState;
  return (
    <Fragment>
      <h3>Ticker Details</h3>
      <div>
        <Label>Bid:</Label>
        {tickerDetails.bid}
      </div>
      <div>
        <Label>Bid Size:</Label>
        {tickerDetails.bidSize}
      </div>
      <div>
        <Label>Ask:</Label>
        {tickerDetails.ask}
      </div>
    </Fragment>
  );
};

const Label = styled("span")`
  margin-right: 10px;
  font-weight: bold;
`;

export default Ticker;
