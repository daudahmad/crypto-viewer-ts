import pairs from "../../reducers/pairs";
import {
  PAIRS_FETCH_REQUESTED,
  PAIRS_FETCH_FAILED,
  PAIRS_FETCH_SUCCEEDED
} from "../../constants";

describe("pairs reducer", () => {
  // it('should handle initial state', () => {
  //     expect(
  //       pairs(undefined, {})
  //     ).toEqual([])
  //   })
  it("should handle pairs fetch requested", () => {
    expect(pairs(undefined, { type: PAIRS_FETCH_REQUESTED })).toEqual({
      isFetching: true,
      items: []
    });
  });

  it("should handle pairs fetch request failure", () => {
    expect(
      pairs(undefined, { type: PAIRS_FETCH_FAILED, message: "error message" })
    ).toEqual({
      isFetching: false,
      items: []
    });

    expect(
      pairs(
        { isFetching: true, items: [] },
        { type: PAIRS_FETCH_FAILED, message: "error message" }
      )
    ).toEqual({
      isFetching: false,
      items: []
    });
  });

  it("should handle pairs fetch request success", () => {
    expect(
      pairs(undefined, {
        type: PAIRS_FETCH_SUCCEEDED,
        pairs: [
          [
            "tBTCUSD",
            6531,
            69.93580435,
            6531.1,
            73.50671664,
            -41.1,
            -0.0063,
            6531,
            9567.4119416,
            6605.1,
            6496.7
          ]
        ]
      })
    ).toEqual({
      isFetching: false,
      items: [
        {
          baseCurrency: "BTC",
          label: "BTC/USD",
          quoteCurrency: "USD",
          symbol: "tBTCUSD"
        }
      ]
    });

    expect(
      pairs(
        {
          isFetching: false,
          items: [
            {
              baseCurrency: "BTC",
              label: "BTC/USD",
              quoteCurrency: "USD",
              symbol: "tBTCUSD"
            }
          ]
        },
        {
          type: PAIRS_FETCH_SUCCEEDED,
          pairs: [
            [
              "tBTCUSD",
              6531,
              69.93580435,
              6531.1,
              73.50671664,
              -41.1,
              -0.0063,
              6531,
              9567.4119416,
              6605.1,
              6496.7
            ],
            [
              "tLTCBTC",
              0.0081346,
              903.27612845,
              0.0081412,
              783.75307514,
              -0.0001913,
              -0.023,
              0.0081382,
              13841.54042712,
              0.0083295,
              0.0080803
            ]
          ]
        }
      )
    ).toEqual({
      isFetching: false,
      items: [
        {
          baseCurrency: "BTC",
          label: "BTC/USD",
          quoteCurrency: "USD",
          symbol: "tBTCUSD"
        },
        {
          baseCurrency: "LTC",
          label: "LTC/BTC",
          quoteCurrency: "BTC",
          symbol: "tLTCBTC"
        }
      ]
    });
  });
});
