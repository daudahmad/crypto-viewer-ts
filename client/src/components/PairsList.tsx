import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
import { Btc, Ltc, Eth, Etc } from "react-cryptocoins";
import CryptoIcon from "./CryptoIcon";

import Pair from "./Pair";
import { Pairs } from "../types";
import { Icon, ListItemIcon } from "@material-ui/core";

interface Props {
  pairs: Pairs[];
}

class PairsList extends React.Component<Props, {}> {
  public render() {
    return (
      <List>
        {this.props.pairs.map((pair: Pairs) => (
          <ListItem button>
            <Pair pair={pair} />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default PairsList;

// <CryptoIcon name="btc" />
// <ul>
// , i</div>
//           <div>
//         {this.props.pairs.map((pair: any) => (
// {/* <ListItemIcon> */}
// {/* <CryptoIcon.Btc /> */}
// {/* <Ltc /> */}
// {/* </ListItemIcon> */}
// <span>BTC</span>
// {/* <ListItemText primary="BTC" /> */}
//           // <li key={i}>
//             <span>{pair.label}</span>
//           // </li>
//         ))}
// </div>
// </ul>
