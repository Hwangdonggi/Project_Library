import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Routing from "./routing/Routing";
import Login from "./login/Login";

function App() {
  const [book, setBook] = useState([]);
  return (
    <div className="App">
      <Routing book={book} />
    </div>
  );
}

export default App;
