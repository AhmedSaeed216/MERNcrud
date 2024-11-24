import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Read from './components/Read';
import Update from "./components/Update";
import Create from "./components/Create"
// import Home from "./components/"
const Home = () => <h1>Welcome to Home</h1>;
// const Create = () => <h1>Create a New Todo</h1>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Default Home route */}
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/all" element={<Read />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
