import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import App from './App.jsx'

describe('App', () => {
  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByRole('link', { name: /^home$/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^about$/i })).toBeInTheDocument()
  })
})
