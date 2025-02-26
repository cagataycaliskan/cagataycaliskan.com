import React, { useState } from "react";
import Image from "next/image";
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
  const [isLoading, setIsLoading] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <div onClick={() => window.open(linkUrl, "_blank")} style={{ cursor: 'pointer', position: 'relative' }}>
          {isLoading && <div className="loading-spinner" />}
          <Image
            src={imageUrl}
            alt="Certificate"
            width={800}
            height={600}
            className="modal-image"
            onLoad={() => setIsLoading(false)}
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
