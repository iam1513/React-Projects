import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import Upload from "./components/Upload";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/upload" element={<Upload />} />
        {/* Add more routes here as needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
