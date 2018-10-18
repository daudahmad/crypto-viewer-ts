declare module "react-cryptocoins" {
  import * as React from "react";

  export type Size = string | number;

  export interface Props {
    color?: string;
    size?: Size;
  }

  export interface CryptoCoinInterface
    extends React.StatelessComponent<Props> {}

  export const Btc: CryptoCoinInterface;
  export const Eth: CryptoCoinInterface;
  export const Ltc: CryptoCoinInterface;
  export const Etc: CryptoCoinInterface;
}
