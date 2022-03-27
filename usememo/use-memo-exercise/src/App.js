import logo from "./logo.svg";
import "./App.css";
import { useFetch } from "./useFetch";
import { useToggle } from "./useToggle";
import { useCallback, useState } from "react";
function App() {
  const [count, incrementCount] = useState(0);
  const { data } = useFetch(
    "https://uselessfacts.jsph.pl/random.json?language=en",
    count
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Fact Generator</h1>
        <button onClick={() => incrementCount(count + 1)}>
          Generate Random Fact
        </button>
        <div style={{ "margin-top": "24px" }}>{data}</div>
      </header>
    </div>
  );
}

export default App;
