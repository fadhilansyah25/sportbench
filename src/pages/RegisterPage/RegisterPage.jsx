import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { createFireBaseAuth } from "../../firebase";
import { USER_REGISTRATION } from "../../graphql/queries";
import "./RegisterPage.scss";

export default function RegisterPage() {
  const [formRegister, setFromRegister] = useState({
    fullname: "",
    noTelephone: "",
    email: "",
    password: "",
    reEnterPassword: "",
    newsLetter: false,
  });

  const [insertUser, { loading: loadingRegis, error: errorRegis }] =
    useMutation(USER_REGISTRATION);

  const resetForm = () => {
    setFromRegister({
      fullname: "",
      noTelephone: "",
      email: "",
      password: "",
      reEnterPassword: "",
      newsLetter: false,
    });
  };

  const handleInputChange = (e) => {
    setFromRegister({ ...formRegister, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userCredential = await createFireBaseAuth(
      formRegister.email,
      formRegister.password
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
    <div className="container">
      <div className="row">
        <div className="col-6 left-content"></div>
        <div className="col-6 right-content">
          <h1>Register</h1>
          {loadingRegis ? <p>please wait register on progress</p> : null}
          {errorRegis ? <p>There is something wrong</p> : null}
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
                <span class="material-icons-outlined icons">person</span>
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
                <span class="material-icons-outlined icons">phone</span>
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
                <span class="material-icons-outlined icons">email</span>
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
            <div className="mb-4">
              <label htmlFor="reEnterPassword" className="form-label">
                Re-enter Password
              </label>
              <input
                type="password"
                name="reEnterPassword"
                className="form-control"
                placeholder="Re-Enter your password"
                value={formRegister.reEnterPassword}
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
                  setFromRegister({
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
