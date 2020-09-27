import test from "tape";
import { call, fork, put, select, take } from "redux-saga/effects";
import { fetchPairs } from "../../sagas/index";
import fetchPairsApi from "../../api/fetch-pairs";
import * as actions from "../../actions";

describe("pairs Saga", () => {
  it("should run fetch pairs saga", () => {
    // const mockPairs = [1, 2, 3];
    const mockPairs: Array<Array<any>> = [
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
    ];
    const generator = fetchPairs();
    // console.log(generator);
    expect(generator.next().value).toEqual(call(fetchPairsApi));
    expect(generator.next(mockPairs).value).toEqual(
      put(actions.requestPairsSucceeded(mockPairs))
    );
  });
});
