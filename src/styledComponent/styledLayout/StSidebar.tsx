import styled from 'styled-components';

export const SideBarContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  z-index: 30;
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

//sidebar end
