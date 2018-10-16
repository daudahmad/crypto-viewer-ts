import React from "react";
import styled from "react-emotion";
import { Btc, Ltc, Eth, Etc } from "react-cryptocoins";
import { object } from "prop-types";

const Span = styled("span")`
  margin-left: 10px;
`;

interface Props {
  name: string;
}

const components: { [propName: string]: any; } = {
  BTC: Btc,
  LTC: Ltc,
  ETH: Eth,
  ETC: Etc
};

const CryptoIcon = ({ name }: Props) => {
  const TagName = components[name];
//   const TagName = <div></div>;
  //   console.log(TagName);
  if (TagName) {
    return (
      <Span>
        <TagName size={16} />
      </Span>
    );
  } else {
    return <Span>$</Span>;
  }
};

export default CryptoIcon;
