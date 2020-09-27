import React from "react";
import { create } from "react-test-renderer";
import TitleBar from "../../components/TitleBar";
import { createRenderer } from "react-test-renderer/shallow";

describe("TitleBar", () => {
  it("should render correctly", () => {
    const renderer = createRenderer();
    renderer.render(<TitleBar />);
    // console.log(renderer.getRenderOutput());
    const output = renderer.getRenderOutput();
    // console.log(output.type);
    const [ Title ] = output.props.children;
    expect(output.type.displayName).toBe("Styled(header)")
    expect(output.props.children.type.displayName).toBe("Styled(h1)")
    expect(output.props.children.props.children).toBe("Crypto prices viewer")
    // console.log(output.props.children.props);
    // console.log(output.props.children.props);
    // console.log(Title);
    // console.log(output.key);
  });
});
