import { useState } from 'react'
import { QueryProvider } from './context/QueryContext'
import PostPage from './pages/PostPage'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// React Query (TanStack Query)
// npm install @tanstack/react-query

function App() {

  return (
    <>
    <QueryProvider>
      <PostPage />
    </QueryProvider>
    </>
  )
}

export default App
