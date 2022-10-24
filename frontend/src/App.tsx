import React, { useEffect, useState } from "react";
import { CardList, FootBar, AddCardForm, NavBar, Graph } from "./components";
import "./styles/Global.scss";
import { apiGetCards } from "./front-api";
import { useDispatch } from "react-redux";
import { setCardsState } from "./stores";

function App() {
  const [view, setView] = useState<string>("list");
  const [addingCard, setAddingCard] = useState<boolean>(false);
  const dispatch = useDispatch();

  function getCardsList() {
    apiGetCards().then((data) => {
      dispatch(setCardsState(data));
    });
  }

  useEffect(() => {
    getCardsList();
  }, []);

  function handleAddCard() {
    setAddingCard(!addingCard);
    getCardsList();
  }

  let xView;
  switch (view) {
    case "list":
      xView = <CardList />;
      break;
    case "graph":
      xView = <Graph />;
  }

  return (
    <div className="app-root">
      <h1 className="app-title">My Little Budget</h1>
      <NavBar onClick={setView} />
      {xView}
      <FootBar onAddCard={handleAddCard} />
      <AddCardForm addingCard={addingCard} closeAddCard={handleAddCard} />
    </div>
  );
}

export default App;
