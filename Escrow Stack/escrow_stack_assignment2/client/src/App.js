import React, { useState } from "react";
import Dashboard from "./Dashboard";

function App() {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (email) {
      setIsLoggedIn(true);
    }
  };

  if (isLoggedIn) {
    return <Dashboard email={email} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
