import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Index.css
import '../styles/index.css';

// Components
import Home from './components/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
