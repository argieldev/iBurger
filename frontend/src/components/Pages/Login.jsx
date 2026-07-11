import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };

    fetch("http://localhost:3000/auth/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.success) {
          localStorage.setItem("user", JSON.stringify(data.user));
          console.log("saved login");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
