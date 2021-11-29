import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { createFireBaseAuth } from "../../firebase";
import { USER_REGISTRATION } from "../../graphql/queries";
import "./RegisterPage.scss";

export default function RegisterPage() {
  const [formRegister, setFormRegister] = useState({
    fullname: "",
    noTelephone: "",
    email: "",
    password: "",
    username: "",
    newsLetter: false,
  });

  const [insertUser, { loading: loadingRegis, error: errorRegis }] =
    useMutation(USER_REGISTRATION);

  const resetForm = () => {
    setFormRegister({
      fullname: "",
      noTelephone: "",
      email: "",
      password: "",
      username: "",
      newsLetter: false,
    });
  };

  const handleInputChange = (e) => {
    setFormRegister({ ...formRegister, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userCredential = await createFireBaseAuth(
      formRegister.email,
      formRegister.password,
      formRegister.username
    );
    console.log(userCredential);
    await insertUser({
      variables: {
        email: formRegister.email,
        fullname: formRegister.fullname,
        id: userCredential.uid,
        no_telephone: formRegister.noTelephone,
      },
    })
      .then(() => console.log("Registration Successful"))
      .catch((err) => console.log(err));
    resetForm();
  };

  return (
    <div className="container register-page">
      <div className="row">
        <div className="col-6 left-content"></div>
        <div className="col-6 right-content">
          <h1>Register</h1>
          {loadingRegis ? <h4>please wait register on progress</h4> : null}
          {errorRegis ? <h4>There is something wrong</h4> : null}
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label htmlFor="fullname" className="form-label">
                Full Name
              </label>
              <div className="input-group inner-addon right-addon">
                <input
                  type="text"
                  name="fullname"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formRegister.fullname}
                  onChange={handleInputChange}
                  required
                />
                <span className="material-icons-outlined icons">person</span>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="noTelephone" className="form-label">
                No. Telephone
              </label>
              <div className="input-group inner-addon right-addon">
                <input
                  type="tel"
                  name="noTelephone"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formRegister.noTelephone}
                  onChange={handleInputChange}
                  required
                />
                <span className="material-icons-outlined icons">phone</span>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <div className="input-group inner-addon right-addon">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Enter your Username"
                  value={formRegister.username}
                  onChange={handleInputChange}
                  required
                />
                <span className="material-icons-outlined icons">person</span>
              </div>
            </div>
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
                  value={formRegister.email}
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
                value={formRegister.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                name="newsLetter"
                checked={formRegister.newsLetter}
                onChange={(e) =>
                  setFormRegister({
                    ...formRegister,
                    [e.target.name]: !formRegister.newsLetter,
                  })
                }
              />
              <label className="form-check-label">
                Join newsletter to get our new info
              </label>
            </div>
            <button className="btn btn-primary mt-2">REGISTER</button>
          </form>
        </div>
      </div>
    </div>
  );
}
