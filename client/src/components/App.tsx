import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "react-emotion";

import NavBar from "./NavBar";
import PairsList from "./PairsList";
import { PairsState, StoreState } from "../types";
import { PairsAction, RequestPairs, requestPairs } from "../actions";

// import logo from "./logo.svg";
// import Button from '@material-ui/core/Button';
// import "./App.css";

const Container = styled("div")`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`;

interface Props extends PairsState {
  fetchPairs: () => void;
}
// interface Props {
//   pairs: PairsState
//   // items: [];
//   // isFetching: boolean;
// }

class App extends Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    console.log("Component mounted");
    console.log("Dispatching fetchPairsaction");
    this.props.fetchPairs();
    console.log("Dispatched fetchPairsaction");
    // Let's dispatch an action
    // const { dispatch } = this.props;
  }

  render() {
    const { isFetching, items } = this.props;
    return (
      <Container>
        <NavBar title="Crypto Viewer" />
        {isFetching && <div>Loading...</div>}
        {!isFetching && <PairsList pairs={items} />}
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<PairsAction>) => ({
  fetchPairs() {
    dispatch(requestPairs());
  }
});

// function mapStateToProps(state: StoreState, { pairs }: { pairs: any }) {
const mapStateToProps = ({
  pairs: { items, isFetching }
}: {
  pairs: PairsState;
}) => ({
  // console.log(state);
  // console.log(items);
  // console.log(isFetching);
  // const { items, isFetching } = pairs;
  // return {
  items,
  isFetching
  // };
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
