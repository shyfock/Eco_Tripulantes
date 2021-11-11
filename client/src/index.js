import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './index.css';
import Chat from './routes/chat'
import Publications from './routes/publications'
import Publication from './routes/publication';
import Home from './component/Home'
import Register from './component/Register'
import Login from './component/Login'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Navegation from './layouts/Navegation'




import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="chat" element={<Chat/>}/>
        <Route path="publications" element={<Publications/>}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select a publication</p>
              </main>
            }
          />
          <Route path=":publicationId" element={<Publication/>}/>
        </Route>
        <Route
          path="*"
          element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
          }
        />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
