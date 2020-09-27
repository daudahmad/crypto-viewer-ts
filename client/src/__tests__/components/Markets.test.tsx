import React from "react";
import { create } from "react-test-renderer";
import { Markets } from "../../components/Markets/Markets";

describe("snapshot", () => {
  const fetchPairs = jest.fn();
  const selectTicker = jest.fn();
  const c = create(
    <Markets
      fetchPairs={fetchPairs}
      selectTicker={selectTicker}
      items={[]}
      isFetching={false}
    />
  );
  console.log(c.toJSON());
  expect(c.toJSON()).toMatchSnapshot();
});
