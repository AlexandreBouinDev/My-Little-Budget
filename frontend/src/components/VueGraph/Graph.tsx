import { useDispatch, useSelector } from "react-redux";

export function Graph() {
  const dispatch = useDispatch();
  const cards = useSelector((state: any) => state.cards);

  return <div>MON GRAPHIQUE RECHARTS</div>;
}
