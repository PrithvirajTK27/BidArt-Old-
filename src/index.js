import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
    Home,
    Chat,
    Navi,
    Messenger,
    Publish
} from "./components";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/arttalk" element={<Chat />} />
                <Route path="/messenger" element={<Messenger />} />
                <Route path="/publish" element={<Publish />} />
            </Routes>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
