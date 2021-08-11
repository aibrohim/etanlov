import { useHistory } from "react-router-dom";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [setToken] = useToken(true);
  const history = useHistory();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    setToken("xxx");
    history.push("/");
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit} action="#" method="post">
        <input type="text" />
        <input type="password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
