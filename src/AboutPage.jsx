import { Link } from 'react-router';

export default function AboutPage() {
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