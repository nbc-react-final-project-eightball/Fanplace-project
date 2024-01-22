import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SideBarContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  z-index: 30;
  padding-left: 1.5rem;
`;

export const SideBarSectionTop = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.625rem;
  width: 100%;
  flex-grow: 0;
`;

export const SideBarBtn = styled.li`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  a {
    text-transform: uppercase;
  }
`;

export const SideBarSectionBottom = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  height: 50%;
  flex-grow: 3;
`;
interface SNavLinkStyleProps {
  activeStyle?: boolean;
}
export const SNavLink = styled(NavLink)<SNavLinkStyleProps>`
  color: ${(props) => (props.activeStyle ? '#e31313' : '#000000')};
  text-decoration: none;

  &.active {
    color: red;
  }
`;
//sidebar end
