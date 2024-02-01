import styled from 'styled-components';

export const RecentProductsWrapper = styled.div``;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    align-items: baseline;
    gap: 1.25rem;
    margin-bottom: 1.25rem;
  }
  div h3 {
    font-size: 1.125rem;
  }
  div p {
    color: #999;
    font-size: 0.875rem;
    word-break: keep-all;
  }
  border-bottom: 1px solid var(--color-medium-gray-dd);
  @media (max-width: 480px) {
    div {
      align-items: center;
      gap: 0.625rem;
    }
    div h3 {
      min-width: 4.25rem;
    }
  }
`;
