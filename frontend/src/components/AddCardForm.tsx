import React, { useState } from "react";
import clsx from "clsx";
import "./AddCardForm.scss";
import { apiAddCard } from "../front-api";
import { CardModel } from "../models";

interface IAddCardFormProps {
  addingCard: boolean;
  closeAddCard: () => void;
}

type IButtonType = "expense" | "income";

export function AddCardForm({ addingCard, closeAddCard }: IAddCardFormProps) {
  const [name, setName] = useState<String>("");
  const [type, setType] = useState<"expense" | "income">("expense");
  const [amount, setAmount] = useState<Number>(0);
  const [date, setDate] = useState<Date>();
  const [ignored, setIgnored] = useState<Boolean>(true);

  function handleType(buttonType: IButtonType) {
    if (buttonType === "expense") {
      setType("expense");
    } else if (buttonType === "income") {
      setType("income");
    }
  }
  function handleIgnored() {
    if (ignored === true) {
      setIgnored(false);
    } else if (ignored === false) {
      setIgnored(true);
    }
  }

  function handleDate(value: string) {
    let date = new Date(value);
    setDate(date);
  }

  function submit() {
    let card = {
      name: name,
      type: type,
      amount: amount,
      date: date,
      ignored: ignored
    };

    apiAddCard(card as CardModel).then(() => closeAddCard());
  }

  let disabled = true;
  if (name && amount && date) {
    disabled = false;
  }

  return (
    <div className={clsx("addcardform-root", addingCard ? "show" : "")}>
      <h2>Ajouter une nouvelle carte</h2>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          className="input"
          type="text"
          placeholder="Titre"
          onChange={(e) => setName(e.target.value)}
        />
        <div className="type-choice">
          <div
            onClick={() => handleType("income")}
            className={clsx("income-button", type)}
          >
            Revenu
          </div>
          <div
            onClick={() => handleType("expense")}
            className={clsx("expense-button", type)}
          >
            Dépense
          </div>
        </div>
        <div className="card-infos">
          <div>
            <input
              className="input"
              type="number"
              placeholder="Montant"
              min={0}
              onChange={(e) => setAmount(parseInt(e.target.value))}
            />{" "}
            €
          </div>
          <input
            className="input"
            type="date"
            placeholder="Titre"
            onChange={(e) => handleDate(e.target.value)}
          />
        </div>
        <div className="ignore-card">
          <label>Ignorer cette carte ?</label>
          <input
            type="checkbox"
            placeholder="Revenu ?"
            onChange={() => handleIgnored()}
          />
        </div>
        <div className="form-actions">
          <button onClick={closeAddCard} className="cancel">
            ANNULER
          </button>
          <button
            type="submit"
            onClick={submit}
            className={clsx("submit", disabled ? "disabled" : "")}
            disabled={disabled}
          >
            AJOUTER
          </button>
        </div>
      </form>
    </div>
  );
}
