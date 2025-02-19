import React from "react";
import "./FancyButton.css"; // Import the CSS file

interface FancyButtonProps {
  text: string;
  onClick?: () => void;
}

const FancyButton: React.FC<FancyButtonProps> = ({ text, onClick }) => {
  return (
    <button className="fancy-button" onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

export default FancyButton;
