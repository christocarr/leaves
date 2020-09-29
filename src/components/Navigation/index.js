import React from "react";
import { NavigationContainer, NavigationLink } from "./styles";

function Navigation({ children, ...restProps }) {
  return <NavigationContainer>{children}</NavigationContainer>;
}

Navigation.NavigationLink = function HeaderNavigation({
  children,
  ...restProps
}) {
  return <NavigationLink {...restProps}>{children}</NavigationLink>;
};

export default Navigation;
