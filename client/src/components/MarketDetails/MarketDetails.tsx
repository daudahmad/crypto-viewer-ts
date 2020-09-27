import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "react-emotion";

import Loading from "../Loading";
import Ticker from "../Ticker";
import { SelectedTickerState } from "../../types";

interface Props extends SelectedTickerState {
  pairSymbol?: string;
  path: string;
}

class MarketDetails extends Component<Props, {}> {
  render() {
    const { isFetching, tickerSymbol, tickerDetails } = this.props;
    return (
      <Fragment>
        {isFetching && <Loading />}
        {!isFetching && <Ticker tickerDetails={tickerDetails} />}
      </Fragment>
    );
  }
}

const Wrapper = styled("div")`
  margin-left: 5px;
`;

const mapStateToProps = ({
  selectedTicker: { tickerSymbol, tickerDetails, isFetching }
}: {
  selectedTicker: SelectedTickerState;
}) => ({
  tickerSymbol,
  tickerDetails,
  isFetching
});

export default connect(mapStateToProps)(MarketDetails);
