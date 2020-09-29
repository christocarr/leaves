import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.nav``;

export const NavigationLink = styled(Link)`
  color: white;
  padding: 0.5em;
  text-decoration: none;

  &:hover {
    color: yellow;
  }
`;
