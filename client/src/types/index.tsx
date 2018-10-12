export interface Pairs {
  symbol: string;
  label: string;
}

export interface PairsState {
  items: Pairs[];
  isFetching: boolean;
}

export interface StoreState {
  pairs: PairsState;
}
