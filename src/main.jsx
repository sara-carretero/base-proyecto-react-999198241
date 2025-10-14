import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterApp } from './router/RouterApp.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { ChatProvider } from './context/ChatContext.jsx'
import './styles/index.css'
import './styles/help.css'
import './styles/popup.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ChatProvider>
        <RouterApp />
      </ChatProvider>
    </ThemeProvider>
  </StrictMode>,
)
