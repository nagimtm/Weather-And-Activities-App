import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { Form } from "./Form";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Form />
    </>
  );
}

export default App;
