import React, { useState, useEffect } from "react";

const NAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  useEffect(() => {
    const confirm = NAME_REGEX.test(firstName);
    setValidFirstName(confirm);
  }, [firstName]);

  useEffect(() => {
    const confirm = NAME_REGEX.test(lastName);
    setValidLastName(confirm);
  }, [lastName]);

  useEffect(() => {
    const confirm = EMAIL_REGEX.test(email);
    setValidEmail(confirm);
  }, [email]);

  useEffect(() => {
    const confirm = PASSWORD_REGEX.test(password);
    setValidPassword(confirm);
  }, [password]);

  return (
    <section className="sign-up">
      <div className="sign-up-content">
        <h1>Learn to code by watching others</h1>
        <p className="description">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="sign-up-form">
        <button className="btn try-free">
          Try it free 7days{" "}
          <span className="free-cond">then $20/mo. thereafter</span>
        </button>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* First Name */}
          <input
            type="text"
            className={!validFirstName && firstNameFocus ? "invalid" : null}
            autoComplete="off"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            required
            aria-describedby="nameErr"
            onFocus={() => setFirstNameFocus(true)}
            onBlur={() => setFirstNameFocus(false)}
          />
          <p
            id="nameErr"
            className={!validFirstName && firstNameFocus ? "err" : "off"}
          >
            First Name is invalid.
          </p>

          {/* Last NAme */}
          <input
            type="text"
            className={!validLastName && lastNameFocus ? "invalid" : null}
            autoComplete="off"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            required
            aria-describedby="nameErr"
            onFocus={() => setLastNameFocus(true)}
            onBlur={() => setLastNameFocus(false)}
          />
          <p
            id="nameErr"
            className={!validLastName && lastNameFocus ? "err" : "off"}
          >
            Last Name is invalid
          </p>

          {/* EMail */}
          <input
            type="email"
            className={!validEmail && emailFocus ? "invalid" : null}
            autoComplete="off"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-describedby="emailErr"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
          <p
            id="emailErr"
            className={!validEmail && emailFocus ? "err" : "off"}
          >
            Email is invalid
          </p>

          {/* Password */}
          <input
            type="password"
            className={!validPassword && passwordFocus ? "invalid" : null}
            autoComplete="off"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-describedby="passwordErr"
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
          />
          <p
            id="passwordErr"
            className={!validPassword && passwordFocus ? "err" : "off"}
          >
            Password is invalid
          </p>
          <button className="btn free-trial">Claim your free trial</button>
          <p className="agreement">
            By clicking the button, you are agreeing to our
            <span className="terms"> terms and services</span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
