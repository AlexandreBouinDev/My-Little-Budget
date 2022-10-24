import React from "react";
import { CardComponent } from "./CardComponent";
import { useSelector } from "react-redux";
import { CardModel } from "../../models";

import "./CardsList.scss";

export function CardList() {
  const cards = useSelector((state: any) => state.cards);
  let xCardsList =
    cards.map((card: CardModel) => (
      <CardComponent card={card} key={card._id as string} />
    )) ?? "Aucune carte ajoutée";

  return <div className="cardsList-root">{xCardsList}</div>;
}
