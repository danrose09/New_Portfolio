import { Routes, Route } from "react-router-dom";
import MainScreen from "./screens/MainScreen";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<MainScreen />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
