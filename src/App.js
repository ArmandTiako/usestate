import "./App.css";
import ClassState from "./components/ClassState";
import FunctionState from "./components/FunctionState";

function App() {
  return (
    <div className="App">
      <h1>Use State</h1>
      <ClassState />
      <hr />
      <FunctionState />
    </div>
  );
}

export default App;
