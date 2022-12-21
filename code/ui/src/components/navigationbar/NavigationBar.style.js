import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationBarContainer = styled.div`
  background-color: #00c2cb;
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Banner = styled.div`
  margin-left: 2rem;
`;

export const Circle = styled.div`
  padding: 1rem;
  background-color: #8c52ff;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

export const NavLinkExt = styled(NavLink)`
  text-decoration: none;
  font-size: 1rem;
  margin: 0 0.5rem;
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  //color: ${({ theme }) => theme.color.primary_cta_color};
  color: ${({ theme }) => theme.color.white};
  text-transform: capitalize;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary_cta_bgcolor};

    color: ${({ theme }) => theme.color.primary_cta_color};
  }

  &.active {
    background-color: ${({ theme }) => theme.color.primary_cta_bgcolor};
    color: ${({ theme }) => theme.color.primary_cta_color};
  }
`;

export const NavbarLinkWrapper = styled.div`
  margin-right: 3rem;
`;
