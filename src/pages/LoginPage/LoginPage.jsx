import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "redux/reducer";
import { loginEmailandPassword } from "../../firebase";
import "./LoginPage.scss";

export default function LoginPage() {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resetForm = () => {
    setFormLogin({
      email: "",
      password: "",
      remember: false,
    });
  };

  const handleInputChange = (e) => {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await loginEmailandPassword(
      formLogin.email,
      formLogin.password
    );
    resetForm();
    dispatch(setCurrentUser(JSON.stringify(result.user)));
    navigate("/");
  };

  return (
    <div className="container login-page">
      <div className="row">
        <div className="col-6 left-content"></div>
        <div className="col-6 right-content d-flex align-items-center justify-content-center">
          <div className="w-75">
            <h1>Login</h1>
            <h5 className="mt-4">
              Welcome back! Please login to your account.
            </h5>
            <form onSubmit={handleSubmit} className="mt-5">
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <div className="input-group inner-addon right-addon">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formLogin.email}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="material-icons-outlined icons">email</span>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={formLogin.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-check d-flex justify-content-between mb-4">
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="remember"
                    checked={formLogin.remember}
                    onChange={(e) =>
                      setFormLogin({
                        ...formLogin,
                        [e.target.name]: !formLogin.remember,
                      })
                    }
                  />
                  <label className="form-check-label ms-2">Remember me</label>
                </div>
                <Link to="/">Forget password?</Link>
              </div>
              <button className="btn btn-primary mt-2">LOG IN</button>
            </form>
            <p className="mt-4">
              New Member? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
