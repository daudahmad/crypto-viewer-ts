export interface Pairs {
  symbol: string;
  label: string;
  baseCurrency: string;
  quoteCurrency: string;
}

export interface PairsState {
  items: Pairs[];
  isFetching: boolean;
}

export interface StoreState {
  pairs: PairsState;
}
