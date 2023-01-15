import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";

import { CloseButton } from "@/components";

import style from "./Modal.module.scss";

const Modal = (props) => {
  const {
    children,
    title,
    className,
    closeModal,
    isOpen,
    disableOutsideClick = false,
    hideCloseBtn = false,
    blur = false,
  } = props;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && !disableOutsideClick) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [closeModal, disableOutsideClick]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleCloseModal = () => {
    if (!disableOutsideClick && closeModal) {
      closeModal();
    }
  };

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      onClick={handleCloseModal}
      className={classNames(style.overlay, {
        [style.blur]: blur,
      })}
    >
      <div onClick={(e) => e.stopPropagation()} className={classNames(style.modal, className)}>
        <div className={style.modalHeader}>
          {title && <p className={style.modalTitle}>{title}</p>}
          {!hideCloseBtn && <CloseButton onClick={closeModal} title={"Zamknij"} isOpen />}
        </div>
        <div className={style.modalBody}>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
