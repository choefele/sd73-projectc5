import EntryForm from './EntryForm';

export default function AddEntryModal({ isOpen, onClose, onCreateEntry }) {
  const handleCreate = (formData) => {
    onCreateEntry(formData);
    onClose();
  };

  return (
    <dialog className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box max-w-2xl">
        <h2 className="mb-4 text-2xl font-bold">New Entry</h2>
        <EntryForm onSubmit={handleCreate} />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
}
