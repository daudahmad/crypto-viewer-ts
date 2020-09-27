import axios from "axios";

export default async function fetch(pathname: string) {
  const BASE_URL = "http://localhost:3000";

  const res = await await axios.get(`${BASE_URL}${pathname}`);

  return res.data;
}
