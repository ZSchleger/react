import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: black;
  width: 80%;
  display: flex;
  justify-content: space-between;
  border-bottom: 10px solid grey; 
`;

export const NavLink = styled(Link)`
  color: #808080;
  text-decoration: none;
  padding: 1em;
  cursor: pointer;
  transition: color 0.3s, background 0.3s;
  font-size: 1.2rem;

  &:hover {
    color: black;
    background: white;
  }

  &.active {
    color: lavenderblush;
  }
`;

export const Bars = styled(FaBars)`
  color: #808080;
  display: block;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div` {
  display: flex;
  align-items: center;

}
`;
