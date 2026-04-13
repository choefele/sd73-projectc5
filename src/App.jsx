import { useState } from "react";

function App() {
  const [selectedEntry, setSelectedEntry] = useState(null);

  const entry = {
    title: "My First Diary Entry",
    date: "2026-04-09",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    content:
      "Today I started working on the entry detail modal. The goal is that when the user clicks on a card, a modal opens and shows the full diary entry.",
  };

  const openModal = () => {
    setSelectedEntry(entry);
  };

  const closeModal = () => {
    setSelectedEntry(null);
  };

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold">Diary App</h1>

        <div
          className="card cursor-pointer bg-base-100 shadow-lg"
          onClick={openModal}
        >
          <figure>
            <img src={entry.image} alt={entry.title} className="h-64 w-full object-cover" />
          </figure>

          <div className="card-body">
            <h2 className="card-title">{entry.title}</h2>
            <p className="text-sm text-gray-500">{entry.date}</p>
          </div>
        </div>

        {selectedEntry && (
          <div
  className="fixed inset-0 flex items-center justify-center bg-black/70 p-4 cursor-pointer"
  onClick={closeModal}
>
           <div
  className="w-full max-w-2xl rounded-lg bg-base-100 p-6 shadow-xl"
  onClick={(e) => e.stopPropagation()}
>
              <img
                src={selectedEntry.image}
                alt={selectedEntry.title}
                className="mb-4 h-64 w-full rounded object-cover"
              />
              <h2 className="mb-2 text-2xl font-bold">{selectedEntry.title}</h2>
              <p className="mb-4 text-sm text-gray-500">{selectedEntry.date}</p>
              <p className="mb-6">{selectedEntry.content}</p>

              <button onClick={closeModal} className="btn btn-primary">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;