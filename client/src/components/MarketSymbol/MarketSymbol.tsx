import React from "react";
import styled from "react-emotion";
import { Btc, Ltc, Eth, Etc, CryptoCoinInterface } from "react-cryptocoins";

interface Props {
  name: string;
}

const cryptoSymbols: { [elemName: string]: CryptoCoinInterface } = {
  BTC: Btc,
  LTC: Ltc,
  ETH: Eth,
  ETC: Etc
};

const MarketSymbol = ({ name }: Props) => {
  // console.log(name);
  // console.log(cryptoCoins[name]);
  // console.log(CryptoCoin);
  // If crypto icon not found then default to $
  const CryptoSymbol = cryptoSymbols[name];
  return <Wrapper>{CryptoSymbol ? <CryptoSymbol size={16} /> : "$"}</Wrapper>;
};

const Wrapper = styled("span")`
  margin-left: 5px;
`;

export default MarketSymbol;
