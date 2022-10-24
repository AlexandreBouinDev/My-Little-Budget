import React from "react";
import "./FootBar.scss";

interface IFootBarProps {
  onAddCard: () => void;
}

export function FootBar({ onAddCard }: IFootBarProps) {
  function handleAddCard() {
    onAddCard();
  }

  return (
    <div className="footbar-root">
      <div className="footbar-button">Paramètres</div>
      <div className="footbar-button add" onClick={handleAddCard}>
        Ajouter une nouvelle carte
      </div>
      <div className="footbar-button">Ajustement</div>
    </div>
  );
}
