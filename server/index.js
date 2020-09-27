const axios = require("axios");
const Koa = require("koa");
const app = new Koa();

const DEV_SERVER_URL = "http://localhost:8000";
const EXTERNAL_API_URL = "https://api.bitfinex.com/v2";
const cors = { "Access-Control-Allow-Origin": DEV_SERVER_URL };

app.use(async ctx => {
  const method = ctx.method;
  const path = ctx.path;
  if (method === "GET" && path === "/tickers") {
    const querystring = ctx.querystring;
    const res = await axios.get(`${EXTERNAL_API_URL}${path}?${querystring}`);
    // const res = { data: "test response" };
    // console.log(process.env);
    ctx.set(cors);
    ctx.body = res.data;
  } else if (method === "GET" && path.startsWith("/ticker/")) {
    // console.log(path);
    const querystring = ctx.querystring;
    const res = await axios.get(`${EXTERNAL_API_URL}${path}?${querystring}`);
    ctx.set(cors);
    ctx.body = res.data;
  } else {
    ctx.body = { message: "unsupported path" };
  }
});

app.listen(3000);
