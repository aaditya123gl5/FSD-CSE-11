import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      setMessage("Please enter username and password");
    } else {
      setMessage("Login Successful! Welcome " +username);
    }
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setMessage("");
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>{" "}
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>

      <p>{message}</p>
    </div>
  );
};

export default Login;