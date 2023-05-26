import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalImage = styled.img`
  width: 30%;
  height: 50%;
  object-fit: cover;
  position: relative;
  border-radius: 4px;
`;

function Modal({ image, onClose }) {
  return (
    <ModalContainer>
      <ModalImage src={image} onClick={onClose} alt="Modal_Image" />
    </ModalContainer>
  );
}

export default Modal;
