import styled from 'styled-components';

export const PrepareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;

  h2 {
    margin-top: 1.25rem;
    font-size: 1.5rem;
    font-weight: normal;

    span {
      font-weight: bold;
    }
  }
  p {
    color: #999;
    text-align: center;
    line-height: 1.5;
  }
`;
