import { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Form></Form>
    </div>
  );
}

export default App;
