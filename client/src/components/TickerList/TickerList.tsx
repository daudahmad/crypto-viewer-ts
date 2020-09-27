import React, { Fragment } from "react";
import List from "@material-ui/core/List";
// import ListItemText from "@material-ui/core/ListItemText";
// import { Btc, Ltc, Eth, Etc } from "react-cryptocoins";
// import CryptoIcon from "../CurrencyIcon/CurrencyIcon";

import TickerListItem from "../TickerListItem";
import { Pairs } from "../../types";
// import { Icon, ListItemIcon } from "@material-ui/core";

interface Props {
  pairs: Array<Pairs>;
  onSelectMarketClick: (marketSymbol: string) => void;
}

class TickerList extends React.Component<Props, {}> {
  public render() {
    return (
      <Fragment>
        <h4>Ticker Details</h4>
        <List>
          {this.props.pairs.map((pair: Pairs) => (
            <TickerListItem
              pair={pair}
              key={pair.baseCurrency + pair.quoteCurrency}
              onClick={this.props.onSelectMarketClick}
            />
          ))}
        </List>
      </Fragment>
    );
  }
}

export default TickerList;
