import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { AddEntryModal, Header, ViewEntryModal } from './components';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import { loadEntries, storeEntry } from './lib/localStorage';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [entries, setEntries] = useState(loadEntries());
  const [selectedEntry, setSelectedEntry] = useState();

  const handleNewEntry = (newEntry) => {
    storeEntry(newEntry);
    setEntries([...entries, newEntry]);
  };

  const handleClickEntry = (clickedEntry) => {
    setSelectedEntry(clickedEntry);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-base-200">
      <Header onAddEntryClick={() => setIsAddModalOpen(true)} />

      <main className="mx-auto max-w-5xl p-6">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage entries={entries} onClickEntry={handleClickEntry} />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <AddEntryModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onCreateEntry={handleNewEntry}
      />
      <ViewEntryModal
        isOpen={isModalOpen}
        entry={selectedEntry}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
