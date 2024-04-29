import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BotaoDenuncia from './components/Buttons/ButtonDenuncia/BotaoDenuncia.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <BotaoDenuncia/>
  </React.StrictMode>,
)
