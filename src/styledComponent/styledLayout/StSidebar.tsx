import styled from 'styled-components';

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const SideBarSectionTop = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  flex-grow: 0;
`;

export const SideBarBtn = styled.li`
  width: 100%;
  border: none;
  font-size: 16px;
  font-weight: bold;
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
