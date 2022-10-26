export interface CardModel {
  _id: string;
  name: string;
  type: "expense" | "income";
  amount: number;
  date: Date;
  ignored: boolean;
}
