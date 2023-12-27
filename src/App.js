import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CanvasPage from './components/CanvasPage';
import DownloadPage from './components/DownloadPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<CanvasPage/>}/>
          <Route path="/download" element={<DownloadPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
