import fetch from "./fetch";

const fetchTicker = async (tickerSymbol: string) => {
  try {
    const response = await fetch(`/ticker/${tickerSymbol}`);
    // console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default fetchTicker;
