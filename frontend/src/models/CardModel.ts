export interface CardModel {
  _id: String;
  name: String;
  type: "expense" | "income";
  amount: Number;
  date: Date;
  ignored: Boolean;
}
