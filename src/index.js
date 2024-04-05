import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from "react-router-dom";
import AppRoutes from "./main/AppRoutes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={AppRoutes}/>
    </React.StrictMode>
);

reportWebVitals();
