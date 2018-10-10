export interface PairsState {
  items: [];
  isFetching: boolean;
}

export interface StoreState {
  pairs: PairsState;
}
