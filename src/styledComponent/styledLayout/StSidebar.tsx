import styled from 'styled-components';

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 80%;
`;
export const SideBarBtn = styled.button`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;

  text-align: left;
  transition: all 0.3s ease;
  padding: 0 20px;
  a {
    color: #ffffff;
    display: inline-block;
    margin: 30;
    text-transform: uppercase;
    &:after {
      display: block;
      content: '';
      border-bottom: solid 4px #ffffff;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }
    &:hover:after {
      transform: scaleX(1);
      transform-origin: 0% 50%;
    }
  }
`;

export const SideBarSectionTop = styled.section`
  width: 100%;
  height: 50%;
  flex-grow: 0;
  align-items: center;
`;
export const SideBarSectionBottom = styled.section`
  width: 100%;
  height: 50%;
  flex-grow: 3;
  align-items: center;
`;

//sidebar end
