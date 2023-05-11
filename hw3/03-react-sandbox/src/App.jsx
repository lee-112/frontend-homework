import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Houses from "./components/Houses";
import Home from "./components/Home";
import "./styles.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="houses" element={<Houses />} />
      </Routes>
    </>
  );
}

export default App;
