import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Protected from "./components/Protected";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>MERN Auth with JWT</h1>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/register" style={{ marginRight: "10px" }}>Register</Link>
          <Link to="/login" style={{ marginRight: "10px" }}>Login</Link>
          <Link to="/protected">Protected</Link>
        </nav>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/protected" element={<Protected />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
