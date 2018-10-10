import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "react-emotion";
import NavBar from "./NavBar";
import PairsList from "./PairsList";
import { PairsState, StoreState } from "../types";

// import logo from "./logo.svg";
// import Button from '@material-ui/core/Button';
// import "./App.css";

const Container = styled("div")`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`;

interface Props extends PairsState {}
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
    // Let's dispatch an action
    const { dispatch } = this.props
  }

  render() {
    return (
      <Container>
        <NavBar title="Crypto Viewer" />
        {this.props.items.length > 1 && <PairsList pairs={this.props.items} />}
      </Container>
    );
  }
}

function mapStateToProps(state: StoreState) {
  console.log(state.pairs);
  const { items, isFetching } = state.pairs;
  return {
    items,
    isFetching
  };
}

export default connect(mapStateToProps)(App);
// export default App;
