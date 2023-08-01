import React, { useState } from "react";
import FormContainer from "./components/inputcontainer/form";
import Threads from "./components/threads/threads";
import ThreadContext from "./components/context/threadsContext";
import "./App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCnY1EO0SIuXbUISSOZTgqAkng1JElSak",
  authDomain: "threadgenerator.firebaseapp.com",
  projectId: "threadgenerator",
  storageBucket: "threadgenerator.appspot.com",
  messagingSenderId: "127425444477",
  appId: "1:127425444477:web:0f16316076447cfcf84f14",
  measurementId: "G-3JYZSLJ5X6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const [threads, setThreads] = useState([]);
  return (
    <ThreadContext.Provider value={{ threads, setThreads }}>
      <div className="parent-container">
        <FormContainer />
        <Threads />
      </div>
    </ThreadContext.Provider>
  );
}

export default App;
