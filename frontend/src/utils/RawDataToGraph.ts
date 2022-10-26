import { CardModel } from "../models";
import { FormatDate } from "./FormatDate";

export function RawDataToGraph(rawData: Array<CardModel>) {
  function setAmount(amount: number, type: string) {
    if (type === "expense") {
      return -amount;
    } else {
      return amount;
    }
  }

  let uv: number = 0;

  let parsedData = rawData.map((card) => ({
    name: FormatDate(card.date),
    uv: uv,
    pv: card._id,
    amt: setAmount(card.amount, card.type)
  }));

  parsedData.forEach((item) => {
    uv = uv + item.amt;
    item.uv = uv;
  });

  return parsedData;
}
