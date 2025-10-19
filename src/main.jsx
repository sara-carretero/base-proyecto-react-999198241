import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterApp } from './router/RouterApp.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
import { ChatProvider } from './context/ChatContext.jsx'
import './styles/index.css'
import './styles/help.css'
import './styles/popup.css'
import './styles/notFound.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <ChatProvider>
          <RouterApp />
        </ChatProvider>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
