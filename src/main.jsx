import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import StudentOrientation from './StudentOrientation.jsx';
import './student-orientation.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudentOrientation />
  </StrictMode>,
);
