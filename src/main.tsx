import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { DarkModeProvider } from './context/ModeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <DarkModeProvider>
        <App />
     </DarkModeProvider>
  </React.StrictMode>,
)
