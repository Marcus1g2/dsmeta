import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NotificationButton from './Components/NotificationButton/index'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <NotificationButton />
    <NotificationButton />
    <NotificationButton />
    <NotificationButton />
    <NotificationButton />
  </React.StrictMode>
)
