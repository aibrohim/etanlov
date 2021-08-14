import { useState } from "react";
import { useHistory } from "react-router-dom";
import useToken from "../../hooks/useToken";
import { client } from "../../utils/api-client";

import Logo from "../../assets/img/logo.svg";

const Login = () => {
  const [setToken] = useToken(true);
  const history = useHistory();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const [isLogging, setLogging] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (phoneNumber.trim() && password.trim()) {
      setLoginError("");
      setLogging(true);
      client(`admin/login`, {
        data: {
          phoneNumber: phoneNumber.trim(),
          password: password.trim()
        }
      })
        .then((data) => {
          setLogging(false);
          setToken(data.token);
          history.push("/");
        })
        .catch((error) => {
          setLogging(false);
          setLoginError(error.message);
        });
    }
  };

  return (
    <>
      <div className="auth container">
        <img className="auth__logo" src={Logo} alt="" />
        <div className="auth__content">
          <h1 className="auth__title">Login</h1>
          <form onSubmit={handleFormSubmit} action="#" method="post">
            <input placeholder="+998901234567" className="auth__field field" value={phoneNumber} onChange={evt => setPhoneNumber(evt.target.value)} type="text" />
            <input placeholder="12345678" className="auth__field field" value={password} onChange={evt => setPassword(evt.target.value)} type="password" />
            <button disabled={isLogging} className="auth__submit submit-btn" type="submit">{isLogging ? "Logging in..." : "Login"}</button>
            {loginError && <p style={{color: "red"}}>{loginError}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
