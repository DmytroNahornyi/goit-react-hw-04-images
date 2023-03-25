import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// export const CloseButton = styled.div`
//   max-width: calc(100vw - 48px);
//   max-height: calc(100vh - 24px);
// `;

export const ModalContainer = styled.div`
  position: relative;
  width: 80vw;
  max-width: 800px;
  height: 80vh;
  max-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  margin: auto;
`;
