import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";

function App() {
  const [showMenu, setShowMenu] = useState(false); //state to control menu in mobile view

  return (
    <div className="container">
      <Navbar user="Admin" show={showMenu} setShowMenu={setShowMenu} />
      <Body setShowMenu={setShowMenu} />
    </div>
  );
}

export default App;
