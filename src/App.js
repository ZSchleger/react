import './App.css';


import Navbar from "./components/NavbarElements";
import {
    Routes,
    Route, Router,
} from "react-router-dom";


import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";


function App() {
    return (
        <div className="App">


            <Navbar />

            <Routes>
                <Route path="/Home" element={<Home />}/>
                <Route path="/Resume" element={<Resume />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/AboutMe" element={<AboutMe />} />
            </Routes>

        </div>

    );
}

export default App;
