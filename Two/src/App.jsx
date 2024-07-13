import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
