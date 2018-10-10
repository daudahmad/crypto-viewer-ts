import axios from "axios";

export default async function fetch(pathname: string) {
  const BASE_URL = "https://api.bitfinex.com/v2/";

  const res = await await axios.get(`${BASE_URL}${pathname}`);

  return res;
}
