import { useState } from 'react';

export default function EntryForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, imageUrl, content });
    setTitle('');
    setImageUrl('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="form-control w-full">
        <span className="label-text">Title</span>
        <input
          type="text"
          className="input input-bordered w-full"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </label>

      <label className="form-control w-full">
        <span className="label-text">Image URL</span>
        <input
          type="url"
          className="input input-bordered w-full"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          required
        />
      </label>

      <label className="form-control w-full">
        <span className="label-text">Content</span>
        <textarea
          className="textarea textarea-bordered h-28"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          required
        />
      </label>

      <div className="modal-action mt-0">
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
}
