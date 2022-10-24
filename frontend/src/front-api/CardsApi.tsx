import { CardModel } from "../models";

export async function apiGetCards() {
  return fetch(`http://localhost:3001/api/cards`).then((response) =>
    response.json()
  );
}

export function apiAddCard(card: CardModel) {
  let data = JSON.stringify(card);
  return fetch("http://localhost:3001/api/cards", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: data
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(console.error);
}

export function apiDeleteCard(cardId: String) {
  return fetch("http://localhost:3001/api/cards/" + cardId, {
    method: "DELETE"
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(console.error);
}
