import { useState } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router';
import Header from './components/Header';
import ViewEntryModal from './components/ViewEntryModal';
import HomePage from './HomePage';

function AboutPage() {
  return (
    <div className="card bg-base-100 rounded-box shadow">
      <div className="card-body">
        <h1 className="card-title text-3xl">About</h1>
        <p className="text-base-content/80">
          Routing is powered by React Router v7 and styles are provided by
          Tailwind and DaisyUI.
        </p>
        <div className="card-actions justify-end">
          <Link to="/" className="btn btn-outline">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const entry = {
    title: 'My First Diary Entry',
    date: '2026-04-09',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80',
    content:
      'Today I started working on the entry detail modal. The goal is that when the user clicks on a card, a modal opens and shows the full diary entry.',
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-base-200">
      <Header onAddEntryClick={openModal} />

      <main className="mx-auto max-w-5xl p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <ViewEntryModal isOpen={isModalOpen} entry={entry} onClose={closeModal} />
    </div>
  );
}

export default App;
