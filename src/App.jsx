import { Link, Navigate, Route, Routes } from "react-router";

function HomePage() {
  return (
    <div className="card bg-base-100 shadow-lg">
      <div className="card-body">
        <h1 className="card-title text-3xl">Project Ready</h1>
        <p className="text-base-content/80">
          This repo is initialized with Vite, React, React Router v7, Tailwind,
          DaisyUI, and Vitest.
        </p>
        <div className="card-actions justify-end">
          <Link to="/about" className="btn btn-primary">
            See About Page
          </Link>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="card bg-base-100 shadow-lg">
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
  return (
    <div className="min-h-screen bg-base-200 p-6 md:p-10">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <header className="navbar rounded-box bg-base-100 px-4 shadow">
          <div className="flex-1">
            <span className="text-lg font-semibold">sd73-projectc5</span>
          </div>
          <nav className="flex gap-2">
            <Link to="/" className="btn btn-ghost btn-sm">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm">
              About
            </Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
