import logo from "./logo.svg";
import "./App.css";
import { useFetch } from "./useFetch";
import { useToggle } from "./useToggle";
import { useCallback, useState } from "react";
import Child from "./Child";
function App() {
  const [count, incrementCount] = useState(0);
  const { data } = useFetch(
    "https://uselessfacts.jsph.pl/random.json?language=en",
    count
  );

  const incrementer = useCallback(() => incrementCount((c) => c + 1), []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Fact Generator</h1>
        <Child incrementCount={incrementer} />
        <div style={{ marginTop: "24px" }}>{data}</div>
      </header>
    </div>
  );
}

export default App;
