import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

//Defining the root
const root = createRoot(document.getElementById('app'));

//Rendering App
root.render(<App />);