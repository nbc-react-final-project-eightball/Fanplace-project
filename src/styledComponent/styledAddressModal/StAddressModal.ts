import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
  cursor: pointer;
`;
export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 560px;
  height: auto;
  padding: 20px;
  transform: translate(-50%, -50%);
  background-color: var(--color-white);
  border-radius: 8px;
  z-index: 22;
  @media (max-width: 768px) {
    width: calc(100% - 2.5rem);
    max-width: 640px;
    /* margin: 0 1.5rem; */
  }
  @media (max-width: 480px) {
    width: calc(100% - 1.5rem);

    & #__daum__layer_1 {
      width: 100% !important;
      min-width: unset !important;
      & iframe {
        width: 100% !important;
        min-width: unset !important;
      }
      & .form_search .post_search {
        width: calc(100% - 1.5rem);
      }
    }
  }
`;

export const LoginTitle = styled.h2``;
