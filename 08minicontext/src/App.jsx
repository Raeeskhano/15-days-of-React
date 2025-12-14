import { useState } from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0);
  const title = "Card one";

  return (
    <>
      <UserContextProvider>
        <h1>Raees Khan The Pro Coder</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
