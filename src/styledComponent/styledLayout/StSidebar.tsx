import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
interface SideBarContainerProps {
  toggleSidebar: boolean;
}

interface SideBarOverlayProps {
  toggleSidebar: boolean;
}

export const SideBarOverlay = styled.div<SideBarOverlayProps>`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    transition: 0.5s;
    z-index: 24;
    cursor: pointer;
    opacity: ${(props) => (props.toggleSidebar ? '0' : '1')};
    visibility: ${(props) => (props.toggleSidebar ? 'hidden' : 'visible')};
  }
`;
export const SideBarContainer = styled.div<SideBarContainerProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  z-index: 30;
  padding-left: 1.5rem;
  padding-top: 80px;

  @media (max-width: 768px) {
    /* 768px 이하 화면 크기에 대한 스타일 */
    padding-top: 80px;
    width: 100%;
    height: 100%;
    width: 200px;
    margin: 0 auto;
    top: 0;
    right: ${(props) => (props.toggleSidebar ? '-100%' : '0')};
    background-color: #ffffff;
    transition: all 500ms;
  }

  @media (max-width: 480px) {
    /* 480px 이하 화면 크기에 대한 스타일 */
    opacity: ${(props) => (props.toggleSidebar ? 0 : 1)};
    visibility: ${(props) => (props.toggleSidebar ? 'hidden' : 'visible')};
    padding-top: 80px;
    width: 100%;
    height: 100%;
    width: 180px;
    margin: 0 auto;
    background-color: #ffffff;
    transition:
      opacity 0.3s,
      visibility 0.3s;
  }
`;
export const ShowSidebarButton = styled.button`
  display: none;
  position: fixed;
  img {
    width: 30px;
  }
  @media (max-width: 768px) {
    display: block;
    right: -60px;
    top: 20px;
    width: 100px;
    display: block;
    z-index: 31;
  }
  @media (max-width: 480px) {
    /* 480px 이하 화면 크기에 대한 스타일 */
    display: block;
    display: block;
    width: 100px;

    display: block;
  }
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
