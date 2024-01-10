import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAtzhpxoqmA4pXKGOl67uiH0lnLXoFBjZU",
  authDomain: "react-comision-49905.firebaseapp.com",
  projectId: "react-comision-49905",
  storageBucket: "react-comision-49905.appspot.com",
  messagingSenderId: "365381390953",
  appId: "1:365381390953:web:270421e1f52e584a7048f8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
