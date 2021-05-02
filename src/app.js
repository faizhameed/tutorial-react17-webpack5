import { useState } from "react";
import styles from "./app.scss";

const App = () => {
  const [counter, setCounter] = useState(1);
  return (
    <div>
      <h1>{counter}</h1>
      <button className={styles.btn} onClick={() => setCounter(counter + 1)}>
        Add
      </button>
      <button className={styles.btn} onClick={() => setCounter(counter - 1)}>
        Subtract
      </button>
    </div>
  );
};

export default App;
