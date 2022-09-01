import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <Header />
        <Nav />
        <Main />
        <Aside />
        <Footer />
      </div>
    </div>
  );
}

export default App;
