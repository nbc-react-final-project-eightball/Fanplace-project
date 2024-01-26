import styled from 'styled-components';

export const Div = styled.div`
  width: 100%;
  height: auto;
  max-width: 1200px;

  @media (max-width: 768px) {
    /* 768px 이하 화면 크기에 대한 스타일 */
    width: 100%;
    height: auto;
    max-width: 768px;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    /* 480px 이하 화면 크기에 대한 스타일 */
    width: 100%;
    height: auto;
    max-width: 480px;
    margin: 0 auto;
  }
`;
