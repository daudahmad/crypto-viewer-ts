import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "react-emotion";

import MarketsList from "../MarketsList";
import { PairsState, StoreState } from "../../types";
import { PairsAction, RequestPairs, requestPairs } from "../../actions";
import Loading from "../Loading";

interface Props extends PairsState {
  fetchPairs: () => void;
}

class Markets extends Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPairs();
  }

  render() {
    const { isFetching, items } = this.props;
    return (
      <Fragment>
        {isFetching && <Loading />}
        {!isFetching && <MarketsList pairs={items} />}
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<PairsAction>) => ({
  fetchPairs() {
    dispatch(requestPairs());
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
