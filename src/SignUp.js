import React, { useRef, useState, useEffect } from "react";

const NAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUp = () => {
  const nameRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setVaalidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    const confirm = NAME_REGEX.test(name);
  }, [name]);

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
          <span className="free-cond">than $20/mo. thereafter</span>
        </button>
        <form>
          <input
            type="text"
            className={name && validName ? "valid" : "invalid"}
            autoComplete="off"
            ref={nameRef}
            placeholder="First Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            className={name && validName ? "valid" : "invalid"}
            autoComplete="off"
            ref={nameRef}
            placeholder="Last Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className={email && validEmail ? "valid" : "invalid"}
            autoComplete="off"
            ref={nameRef}
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className={password && validPassword ? "valid" : "invalid"}
            autoComplete="off"
            ref={nameRef}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
