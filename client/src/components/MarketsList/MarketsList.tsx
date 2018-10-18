import React from "react";
import List from "@material-ui/core/List";
// import ListItemText from "@material-ui/core/ListItemText";
// import { Btc, Ltc, Eth, Etc } from "react-cryptocoins";
// import CryptoIcon from "../CurrencyIcon/CurrencyIcon";

import MarketListItem from "../MarketListItem";
import { Pairs } from "../../types";
// import { Icon, ListItemIcon } from "@material-ui/core";

interface Props {
  pairs: Array<Pairs>;
}

class MarketsList extends React.Component<Props, {}> {
  public render() {
    return (
      <List>
        {this.props.pairs.map((pair: Pairs) => (
          <MarketListItem
            pair={pair}
            key={pair.baseCurrency + pair.quoteCurrency}
          />
        ))}
      </List>
    );
  }
}

export default MarketsList;
