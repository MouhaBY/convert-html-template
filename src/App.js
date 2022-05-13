import React from "react";
import "./App.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Post from "./pages/Post/Post";


function App() {
    return(
        <Router>
            <Routes>
                <Route path="*" element={ <p>Not Found </p> } />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/posts/:id" element={<Post />} />
            </Routes>
        </Router>
    );
}

export default App;
