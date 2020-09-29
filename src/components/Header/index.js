import React from "react";
import { HeaderContainer, Logo } from "./styles";
import Navigation from "../Navigation";

function Header({ children, ...restProps }) {
  return (
    <HeaderContainer>
      {children}
      <Navigation>
        <Navigation.NavigationLink to="/">Home</Navigation.NavigationLink>
        <Navigation.NavigationLink to="/about_us">About Us</Navigation.NavigationLink>
      </Navigation>
    </HeaderContainer>
  );
}

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return <Logo>{children}</Logo>;
};

export default Header;
