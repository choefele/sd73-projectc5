import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App.jsx';

describe('App', () => {
  it('renders header and new entry button', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /diary app/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /new entry/i }),
    ).toBeInTheDocument();
  });
});
