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

export interface TickerDetails {
  bid?: number;
  bidSize?: number;
  ask?: number;
  askSize?: number;
  dailyChange?: number;
  lastPrice?: number;
  volume?: number;
}

export interface SelectedTickerState {
  tickerSymbol: string;
  tickerDetails: TickerDetails;
  isFetching: boolean;
}

export interface StoreState {
  pairs: PairsState;
  selectedTicker: SelectedTickerState;
}
