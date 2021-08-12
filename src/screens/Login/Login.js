import { useState } from "react";
import { useHistory } from "react-router-dom";
import useToken from "../../hooks/useToken";
import { client } from "../../utils/api-client";

const Login = () => {
  const [setToken] = useToken(true);
  const history = useHistory();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    client(`admin/login`, {
      data: {
        phoneNumber,
        password
      }
    }).then((data) => {
      setToken(data.token);
      history.push("/");
    });
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit} action="#" method="post">
        <input value={phoneNumber} onChange={evt => setPhoneNumber(evt.target.value)} type="text" />
        <input value={password} onChange={evt => setPassword(evt.target.value)} type="password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
