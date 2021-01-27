import "./App.css";
import Todos from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1>It is {new Date().toLocaleTimeString()} now.</h1>
    </div>
  );
}

export default App;
