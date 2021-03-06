import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Router } from "@reach/router";
import styled from "react-emotion";

import TitleBar from "../TitleBar";
import MarketDetails from "../MarketDetails";
import Markets from "../Markets";
import { PairsState, StoreState } from "../../types";
import { PairsAction, RequestPairs, requestPairs } from "../../actions";

// import logo from "./logo.svg";
// import Button from '@material-ui/core/Button';
// import "./App.css";

// interface Props extends PairsState {
//   fetchPairs: () => void;
// }
// interface Props {
//   pairs: PairsState
//   // items: [];
//   // isFetching: boolean;
// }

class App extends Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchPairs();
  }

  // console.log("Component mounted");
  // console.log("Dispatching fetchPairsaction");
  // console.log("Dispatched fetchPairsaction");
  // Let's dispatch an action
  // const { dispatch } = this.props;

  render() {
    // const { isFetching, items } = this.props;
    return (
      <Wrapper>
        <TitleBar />
        <MainContent>
          <Router>
            <Markets path="/" />
            <MarketDetails path="/marketdetails" />
          </Router>
        </MainContent>
      </Wrapper>
    );
  }
}

const Wrapper = styled("div")`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`;

const MainContent = styled("div")`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  text-align: center;
`;

export default App;

{
  /* <Results path="/" /> */
}
{
  /* <Details path="/details/:id" /> */
}
{
  /* {isFetching && <div>Loading...</div>} */
}
{
  /* {!isFetching && } */
}
// const mapDispatchToProps = (dispatch: Dispatch<PairsAction>) => ({
//   fetchPairs() {
//     dispatch(requestPairs());
//   }
// });

// const mapStateToProps = ({
//   pairs: { items, isFetching }
// }: {
//   pairs: PairsState;
// }) => ({
//   items,
//   isFetching
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
