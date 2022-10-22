import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'rsuite/dist/rsuite.min.css';
import UserContext from './components/contexts/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContext>
      <App />
    </UserContext>
  </React.StrictMode>
);