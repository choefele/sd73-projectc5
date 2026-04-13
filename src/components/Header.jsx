import AddEntryButton from './AddEntryButton';

export default function Header({ onAddEntryClick }) {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <h1 className="btn btn-ghost text-xl">Diary App</h1>
      </div>
      <div className="flex gap-2">
        <AddEntryButton onClick={onAddEntryClick} />
      </div>
    </div>
  );
}
