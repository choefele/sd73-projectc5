import { Link } from "react-router";
import AddEntryButton from "./AddEntryButton";

export default function Header({ onAddEntryClick }) {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Diary App
        </Link>
      </div>

      <div className="flex gap-2">
        <Link to="/" className="btn btn-ghost">
          Home
        </Link>
        <Link to="/about" className="btn btn-ghost">
          About
        </Link>
        <AddEntryButton onClick={onAddEntryClick} />
      </div>
    </div>
  );
}
