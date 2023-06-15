import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import AuthProvider from './context/authProvider.jsx'
import { Toaster } from 'react-hot-toast'
import 'react-day-picker/dist/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
        <Toaster />
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
)
