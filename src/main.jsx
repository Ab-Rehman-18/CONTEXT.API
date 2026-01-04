import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createContext } from 'react'

export const userContext = createContext();


createRoot(document.getElementById('root')).render(
  <userContext.Provider value={{ name: "Abdul Rehman"}}>
  <StrictMode>
    <App />
  </StrictMode>,
  </userContext.Provider>
);

