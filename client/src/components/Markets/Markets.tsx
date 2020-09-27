import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "react-emotion";

import TickerList from "../TickerList";
import { PairsState, StoreState } from "../../types";
import {
  TickerActions,
  requestPairs,
  selectTicker
} from "../../actions";
import Loading from "../Loading";
import { select } from "redux-saga/effects";
import MarketSymbol from "../MarketSymbol";

interface Props extends PairsState {
  fetchPairs: () => void;
  selectTicker: (tickerSymbol: string) => void;
}

export class Markets extends Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPairs();
  }

  handleSelectMarketClick = (tickerSymbol: string) => {
    this.props.selectTicker(tickerSymbol);
  };

  render() {
    const { isFetching, items} = this.props;
    return (
      <Fragment>
        {isFetching && <Loading />}
        {!isFetching && <TickerList pairs={items} onSelectMarketClick={this.handleSelectMarketClick} />}
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<TickerActions>) => ({
  fetchPairs() {
    dispatch(requestPairs());
  },
  selectTicker(tickerSymbol: string) {
    dispatch(selectTicker(tickerSymbol));
  }
});

const mapStateToProps = ({
  pairs: { items, isFetching }
}: {
  pairs: PairsState;
}) => ({
  items,
  isFetching
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Markets);
