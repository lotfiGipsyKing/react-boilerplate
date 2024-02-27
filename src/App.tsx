import { useState } from "react";
import "./App.css";
import useAppMetadata from "@/hooks/useAppMetadata";

function App() {
  const [count, setCount] = useState(0);
  useAppMetadata("test", "/personnal-logo.svg");
  return (
    <>
      <h1>React boilerplate</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
