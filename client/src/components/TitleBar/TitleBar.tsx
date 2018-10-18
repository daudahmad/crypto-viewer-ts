import React from "react";
import styled from "react-emotion";

// interface Props {
//   title: string;
// }

const TitleBar = () => (
  <Wrapper>
    <Title>Crypto prices viewer</Title>
  </Wrapper>
);

const Wrapper = styled("header")`
  background-color: #222;
  text-align: center;
  height: 50px;
  padding: 30px;
  color: white;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Title = styled("h1")`
  font-size: 1.5em;
`;

export default TitleBar;
