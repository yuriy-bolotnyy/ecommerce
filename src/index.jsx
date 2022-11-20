import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import {ContextProvider} from "./Context"

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <ContextProvider>
        <Router>
            <App />
        </Router>
    </ContextProvider>
    )
