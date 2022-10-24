import React from "react";
import { clsx } from "clsx";
import "./CardComponent.scss";
import { DeleteOutlined } from "@mui/icons-material";
import { CardModel } from "../../models";
import { apiDeleteCard, apiGetCards } from "../../front-api";
import { useDispatch } from "react-redux";
import { setCardsState } from "../../stores";

interface ICardComponentProps {
  card: CardModel;
  key: string;
}

export function CardComponent({ card, key }: ICardComponentProps) {
  const dispatch = useDispatch();

  function formatDate(date: Date) {
    let UTCDate = new Date(date);
    let formattedDate = UTCDate.toLocaleDateString().slice(0, -5);
    return formattedDate;
  }

  function reloadCardsList() {
    apiGetCards().then((data) => {
      dispatch(setCardsState(data));
    });
  }

  function handleDelete(_id: String) {
    apiDeleteCard(_id).then(() => reloadCardsList());
  }

  return (
    <div className="card-root" key={key}>
      <div className="card-element">
        <div className={clsx("card-edge", card.type)}></div>
        <div className="card-content">
          <div className="card-firstline">
            <p className="card-name">{card.name}</p>
            <p className={clsx("card-amount", card.type)}>
              {`${card.type === "expense" ? "-" : ""} ${card.amount} €`}
            </p>
          </div>
          <p>{formatDate(card.date)}</p>
        </div>
      </div>
      <div className="card-actions">
        <DeleteOutlined onClick={() => handleDelete(card._id)} />
      </div>
    </div>
  );
}
