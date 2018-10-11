import React from "react";
import styled from "react-emotion";

const Container = styled("header")`
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

interface Props {
  title: string;
}

const NavBar = ({ title }: Props) => (
  <Container>
    <Title>{title}</Title>
  </Container>
);

export default NavBar;
