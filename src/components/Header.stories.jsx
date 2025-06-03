import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import Header from '../components/Header'

export default {
  title: 'Componentes/Header',
  component: Header,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ backgroundColor: '#1c2a4d', padding: '1rem' }}>
          <Story />
        </div>
      </MemoryRouter>
    )
  ]
}

export const Default = () => <Header />