import { useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router";
import HomePage from "./HomePage";

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
    title: "My First Diary Entry",
    date: "2026-04-09",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    content:
      "Today I started working on the entry detail modal. The goal is that when the user clicks on a card, a modal opens and shows the full diary entry.",
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-base-200">
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
          <button onClick={openModal} className="btn btn-primary">
            New Entry
          </button>
        </div>
      </div>

      <main className="mx-auto max-w-5xl p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <dialog className={`modal ${isModalOpen ? "modal-open" : ""}`}>
        <div className="modal-box max-w-2xl">
          <img
            src={entry.image}
            alt={entry.title}
            className="mb-4 h-64 w-full rounded-lg object-cover"
          />

          <h2 className="mb-2 text-2xl font-bold">{entry.title}</h2>
          <p className="mb-4 text-sm text-gray-500">{entry.date}</p>
          <p className="mb-6">{entry.content}</p>

          <div className="modal-action">
            <button onClick={closeModal} className="btn">
              Close
            </button>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button onClick={closeModal}>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default App;