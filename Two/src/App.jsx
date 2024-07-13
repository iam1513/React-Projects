import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>bwbdui</div>} />
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
