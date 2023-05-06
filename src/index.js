import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBchCmK7yDAkD69GsLU0yE_5DxgCgm_Pd8",
  authDomain: "cart-14545.firebaseapp.com",
  projectId: "cart-14545",
  storageBucket: "cart-14545.appspot.com",
  messagingSenderId: "191164828037",
  appId: "1:191164828037:web:ba3fb42f385c8c554f5cec"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

