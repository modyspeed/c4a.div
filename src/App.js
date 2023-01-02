import { Routes, Route } from "react-router";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={"/"} />
        <Route element={"/Html"} />
        <Route element={"/Css"} />
        <Route element={"/JavaScript"} />
      </Routes>
    </div>
  );
}

export default App;
