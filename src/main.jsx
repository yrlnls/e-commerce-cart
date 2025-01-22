import { StrictMode } from 'react'; // Import StrictMode for highlighting potential problems in the application
import { createRoot } from 'react-dom/client'; // Import createRoot to render the React application
import './index.css'; // Import global styles
import App from './App.jsx'; // Import the main App component

// Render the App component within StrictMode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
