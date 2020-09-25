import React from "react";
import { HeaderContainer, Logo } from "./styles";

function Header({ children, ...restProps }) {
  return <HeaderContainer>{children}</HeaderContainer>;
}

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return <Logo>{children}</Logo>;
};

export default Header;
