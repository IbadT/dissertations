import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Article } from './components/Article/Article';
// import { Dissertation } from './components/Dissertation/Dissertation';
// import { Presentation } from './components/Presentation/Presentation';
// import { Tasks } from './components/Tasks/Tasks';
// import { Tests } from './components/Tests/Tests'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
