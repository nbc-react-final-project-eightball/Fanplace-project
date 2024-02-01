import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PrepareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  min-height: 60vh;
  text-align: center;
  word-break: keep-all;
  line-height: 1.4;
  h2 {
    margin-top: 1.25rem;
    font-size: 1.5rem;
    font-weight: normal;

    span {
      font-weight: bold;
    }
  }
  p {
    color: var(--color-primary-medium-99);
    line-height: 1.5;
  }
  @media (max-width: 768px) {
    svg {
      width: 48px;
      height: 48px;
    }
    h2 {
      margin-top: 0;
      font-size: 1.375rem;
    }
  }
  @media (max-width: 480px) {
    svg {
      width: 40px;
      height: 40px;
    }
    h2 {
      margin-top: 0;
      font-size: 1.25rem;
    }
  }
`;

// 404 Not Found

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  min-height: 60vh;
  padding: 0 2.5rem 0 8.75rem;
  h2 {
    margin-top: 1.25rem;
    font-size: 1.5rem;
    font-weight: normal;

    span {
      font-weight: bold;
    }
  }
  p {
    color: var(--color-primary-medium-99);
    text-align: center;
    line-height: 1.5;
  }
  @media (max-width: 768px) {
    padding: 2.5rem;
    h2 {
      margin-top: 0;
      text-align: center;
      line-height: 1.5;
    }
    svg {
      width: 48px;
      height: 48px;
    }
  }
  @media (max-width: 480px) {
    h2 {
      font-size: 1.25rem;
    }
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

export const ToHomeLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  max-width: 200px;
  width: 100%;
  height: 48px;
  text-align: center;
  border: 1px solid var(--color-primary);
  border-radius: 5px;
  @media (max-width: 480px) {
    width: 160px;
    height: 40px;
  }
`;
