import fetch from "./fetch";

// import axios from "axios";
// const BASE_URL = "https://api.bitfinex.com/v2/";

// const api = {
//     getAllMarkets: () => axios.get(`${BASE_URL}/tickers?symbols=tBTCUSD,tLTCUSD,tETHUSD`)
// }

export default async function fetchPairs() {
  try {
    // const response = await fetch("/tickers?symbols=ALL");
    const response = await fetch("/tickers?symbols=tBTCUSD,tLTCUSD,tLTCBTC,tETHUSD,tETHUSD,tETCBTC,tETCUSD");
    // const response = await axios.get(
    //   `${BASE_URL}/tickers?symbols=tBTCUSD,tLTCUSD,tETHUSD`
    // );
    // console.log(response);
    console.log(response.length);
    return response;
  } catch (error) {
    console.error(error);
  }
}
