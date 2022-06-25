import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleGetHome = () => {
    axios.get("http://localhost:3000/home123").then((res) => {
      console.log(res);
    });
  };

  const handleClickButton = () => {
    console.log(username, password);
    axios
      .post("http://localhost:3000/api/login", {
        email: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
        // if (res.data.success === true) {
        //   axios.post("http://localhost:5000/api/refreshToken").then((res) => {
        //     console.log(res);
        //   });
        // }
      });
  };

  const handleRefreshToken = () => {
    console.log("refresh");
    axios
      .post("http://localhost:3000/api/refreshToken", {
        username: username,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="App">
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClickButton}>Đăng nhập</button>
      <button onClick={handleRefreshToken}>Refresh Token</button>
      <button onClick={handleGetHome}>Home</button>
    </div>
  );
}

export default App;
