import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl content-center bg-violet-700 p-4">
        The first web-app of mine called thougths
      </h1>
    </>
  );
}

export default App;
