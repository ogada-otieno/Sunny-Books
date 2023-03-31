import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const { email, setEmail, password, setPassword, handleLogin } = useLogin();



  return (
    <form className="login" onSubmit={handleLogin}>
      <h3>Log In</h3>

      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button>Log in</button>
    </form>
  );
};

export default Login;
