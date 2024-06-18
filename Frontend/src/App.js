
import NoteState from "./Context/Notestate";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home.js"
function App() {
  return (
    <NoteState>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
         <Home/>
            }
          />
        
        </Routes>
      </Router>
    </NoteState>
  );
}

export default App;
