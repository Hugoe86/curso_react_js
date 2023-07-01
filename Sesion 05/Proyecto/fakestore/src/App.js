
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen flex flex-col">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;