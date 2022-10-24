import "./NavBar.scss";

interface INavBarProps {
  onClick: (view: string) => void;
}

export function NavBar({ onClick }: INavBarProps) {
  return (
    <nav>
      <div onClick={() => onClick("list")}>Liste</div>
      <div onClick={() => onClick("graph")}>Graphique</div>
    </nav>
  );
}
