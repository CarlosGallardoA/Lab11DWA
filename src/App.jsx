import { useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import { HomeView } from './pages'
import './App.css'
import { Button } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <HomeView/>
    </div>
    </ThemeProvider>
  )
}

export default App
