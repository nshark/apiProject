import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import CanvasPage from "./components/CanvasPage";
import DownloadPage from "./components/DownloadPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CanvasPage />} />
        <Route path="/downloadPage" element={<DownloadPage />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
