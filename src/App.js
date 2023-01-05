import React, { useState, useEffect } from "react";
import { Quiz } from "./Quiz";
import { Start } from "./Start";

function App() {
  const [start, setStart] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  const handleClick = () => {
    setStart((prevStart) => !prevStart);
  };

  return (
    <div className="container">
      {start ? <Quiz data={data} /> : <Start onClick={handleClick} />}
    </div>
  );
}

export default App;
