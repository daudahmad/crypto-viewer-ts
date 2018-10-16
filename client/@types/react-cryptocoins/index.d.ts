declare module "react-cryptocoins" {
  import * as React from "react";

  export type Size = string | number;

  export interface Props {
    color?: string;
    size?: Size;
  }

//   export class cc extends React.SFC<Props>;

  export const Btc: React.SFC<Props>;
  export const Eth: React.SFC<Props>;
  export const Ltc: React.SFC<Props>;
  export const Etc: React.SFC<Props>;
}
