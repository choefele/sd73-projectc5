import { useState } from 'react';
import { createEntry, doesEntryExist } from '../lib/localStorage';
import { inputFormatDate } from '../utils/DateConverter';

export default function EntryForm({ onSubmit }) {
  const [date, setDate] = useState(inputFormatDate);
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formatedDate = new Date(date);

    if (doesEntryExist(formatedDate)) {
      alert(
        'You have already submited an entry in this date. Please come back tomorrow or select a different date!',
      );
      return;
    }

    const newEntry = createEntry(title, imageUrl, content, formatedDate);

    onSubmit(newEntry);

    setDate(inputFormatDate());
    setTitle('');
    setImageUrl('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="form-control w-full">
        <span className="label-text">Date</span>
        <input
          type="date"
          className="input input-bordered w-full mb-4"
          max={inputFormatDate()}
          value={date}
          onChange={(event) => setDate(event.target.value)}
          required
        />
      </label>

      <label className="form-control w-full">
        <span className="label-text">Title</span>
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </label>

      <label className="form-control w-full">
        <span className="label-text">Image URL</span>
        <input
          type="url"
          className="input input-bordered w-full mb-4"
          name="imageUrl"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          required
        />
      </label>

      <label className="form-control w-full">
        <span className="label-text">Content</span>
        <textarea
          className="textarea textarea-bordered h-28 w-full mb-4"
          name="content"
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
