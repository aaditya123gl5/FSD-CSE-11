import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Counter from "./Counter";

const Home = () => {
  return <h1>Home Page</h1>;
};

const Stopwatch = () => {
  return <h1>Stopwatch Page</h1>;
};

const Shopping = () => {
  return <h1>Shopping Page</h1>;
};

const Login = () => {
  return <h1>Login Page</h1>;
};

const App = () => {
  return (
  
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/counter">Counter</Link> |{" "}
        <Link to="/stopwatch">Stopwatch</Link> |{" "}
        <Link to="/shopping">Shopping</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Error: Page Not Found</h1>} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;