import './App.css';

/* NAVBAR IMPORTS HERE; Skip if not doing a navbar */
import Navbar from "./components/NavbarElements";
import {
    Routes,
    Route, Router,
} from "react-router-dom";
/* ebb: Moved the BrowserRouter import to the main index.js */

import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";


function App() {
    return (
        <div className="App">
            {/* NAVBAR STUFF HERE (skip if not using) */ }

            <Navbar />

            <Routes>
                <Route index element={<Home />}/>
                <Route path="/Resume" element={<Resume />} />
                <Route path="/Projects" element={<Projects />} />
            </Routes>
        </div>
    );
}

export default App;
