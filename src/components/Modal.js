import React from "react";
import styles from "./Modal.module.css";

function Modal({ image, onClose }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <img src={image} alt="Modal_Image" />
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}

export default Modal;
