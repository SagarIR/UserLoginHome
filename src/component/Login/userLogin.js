import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/actions/authAction";
import styles from "./userLogin.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header/header";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user?.isLoginIn) {
      navigate("/home");
    }
  }, [navigate, user?.isLoginIn]);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      userLogin({
        ...userData,
        isLoginIn: true,
      })
    );
    setUserData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <Header />
      <div className={styles.main}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.title}>Login</h1>
          <label htmlFor="name" className={styles.label}>
            Username :
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter the value of name"
            value={userData.name}
            onChange={handleChange}
            className={styles.input}
          />
          <label htmlFor="email" className={styles.label}>
            Email :
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter the value of email"
            value={userData.email}
            onChange={handleChange}
            className={styles.input}
          />
          <label htmlFor="password" className={styles.label}>
            Password :
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter the value of password"
            value={userData.password}
            onChange={handleChange}
            className={styles.input}
          />
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
