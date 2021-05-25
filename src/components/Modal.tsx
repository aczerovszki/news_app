import react, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Modal = (props: any) => {
  const portalDiv = document.getElementById('modal-root')!; 

  interface ModalProps {
    show: string;
  }

  const ModalBg = styled.div<ModalProps>`
    display: ${({ show }) => (show ? "block" : "none")};
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  `;

  const ModalContent = styled.div`
    display: block;
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 25%;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px rgb(0 0 0 / 30%);
    border-radius: 20px;
  `;

  const CloseBtn = styled.span`
    color: #aaa;
    float: right;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  `;


  return ReactDOM.createPortal(
    <>
      <ModalBg show={props.show}>
        <ModalContent >
          <CloseBtn onClick={props.onClose}>Close</CloseBtn>
          {props.children}
        </ModalContent>
      </ModalBg>
    </>,
    portalDiv
  );
};

export default Modal;
