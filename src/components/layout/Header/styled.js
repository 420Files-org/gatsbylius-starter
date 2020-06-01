import styled from "styled-components";
import { Link } from "gatsby";
import { fontFamily, color, spacing, mediaQuery } from "helpers/themeHelpers";

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${spacing(["lg"])};
  padding: ${spacing(["none"])};
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.boxShadows.light};
  z-index: 20;

  @media (min-width: ${mediaQuery("md")}) {
    padding: ${spacing(["none", "xs"])};
  }
`;

export const MenuButtonWrapper = styled.div`
  display: flex;
  flex-basis: 33%;
  height: 100%;
  z-index: 30;

  button {
    display: flex;
    height: 100%;
    width: 3rem;
    border-radius: 0;
    padding: ${spacing(["none"])};
  }
`;

export const UserAccountButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const Logo = styled(Link)`
  flex-basis: 33%;
  font-size: 1rem;
  color: ${color("primaryDark")};
  ${fontFamily("titleFont")}
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${mediaQuery("md")}) {
    flex-basis: 50%;
    font-size: 1.3rem;
    text-align: left;
  }
`;

export const Nav = styled.nav`
  flex-basis: 33%;

  @media (min-width: ${mediaQuery("md")}) {
    flex-basis: 50%;
  }
`;

export const NavList = styled.ul`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
`;

export const NavItem = styled.li`
  margin-right: ${spacing(["xs"])};
  text-transform: uppercase;
  &:last-child {
    margin-right: 0;
  }
`;

export const NavLink = styled(Link)`
  color: rgb(36, 36, 40);
  transition: color 0.3s;
  &:hover,
  &.active {
    color: ${color("primary")};
  }
`;

export const NavListTouch = styled.ul`
  ${NavList}
  flex-direction: column;
`;

export const NavItemTouch = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 1.4rem;
  text-transform: uppercase;
  transition: background-color 0.3s;
  &:hover,
  &.active {
    background-color: ${color("greyLight1")};
  }
`;

export const NavLinkTouch = styled(Link)`
  padding: 1.2rem;
  color: rgb(36, 36, 40);
  transition: color 0.3s;
  &:hover,
  &.active {
    color: ${color("primary")};
  }
`;
