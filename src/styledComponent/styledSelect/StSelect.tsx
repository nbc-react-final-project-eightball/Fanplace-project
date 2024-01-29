import styled from 'styled-components';

export const CustomSelect = styled.div`
  position: relative;
`;

export const SelectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

export const StOptions = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #000;
  color: #fff;
  padding: 10px;
  border-radius: 8px;
  @media (max-width: 768px) {
    /* 768px 이하 화면 크기에 대한 스타일 */
    top: unset;
    right: 50%;
    transform: translateX(50%);
    bottom: 40px;
  }
`;

export const StOption = styled.li`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  img {
    width: 1.25rem;
  }
  span {
    font-size: 0.875rem;
  }
`;
