import React, { useState } from "react";
import Modal from "./Modal";
import "./AboutPageStyle.css";

interface ReusableCardProps {
  text: string;
  imageUrl: string;
  linkUrl: string;
}

const ReusableCard: React.FC<ReusableCardProps> = ({
  text,
  imageUrl,
  linkUrl,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="reusable-card" onClick={handleCardClick}>
        {text}
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          imageUrl={imageUrl}
          linkUrl={linkUrl}
        />
      )}
    </>
  );
};

export default ReusableCard;
