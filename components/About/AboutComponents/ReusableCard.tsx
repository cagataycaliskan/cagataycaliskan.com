import React from "react";
import "./AboutPageStyle.css";

interface ReusableCardProps {
  text: string;
  onClick: () => void;
}

const ReusableCard: React.FC<ReusableCardProps> = ({ text, onClick }) => {
  return (
    <div className="reusable-card" onClick={onClick}>
      {text}
    </div>
  );
};

export default ReusableCard;
