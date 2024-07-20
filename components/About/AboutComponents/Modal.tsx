import React from "react";
import "./ModalStyle.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  linkUrl: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  linkUrl,
}) => {
  if (!isOpen) {
    return null;
  }

  const handleImageClick = () => {
    window.open(linkUrl, "_blank");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <img
          src={imageUrl}
          alt="Modal"
          onClick={handleImageClick}
          className="modal-image"
        />
      </div>
    </div>
  );
};

export default Modal;
