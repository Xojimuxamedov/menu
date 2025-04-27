import { Routes, Route, Link } from "react-router-dom";
import Home from "./home";

function App() {
  return (
    <>
      <nav className="main-nav df-sb">
        <Link to="/">Logo</Link>
        <Link to="/example">Example</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}   />
      </Routes>
    </>
  );
}

export default App;
