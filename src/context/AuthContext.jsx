import axios from "axios";
import React, { useEffect, useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const initialState = {
  loading: true,
  data: [],
  error: "",
};
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(initialState);
  const [loginCred, setLoginCred] = useState({ email: "", password: "" });
  const [signupCred, setSignupCred] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const signUp = (e) => {
    e.preventDefault();
    console.log("signupCred", signupCred);
    if (signupCred.password !== signupCred.confirmPassword) {
      return;
    }
    axios
      .post(
        "/api/auth/signup",
        JSON.stringify({
          firstName: signupCred.firstName,
          lastName: signupCred.lastName,
          email: signupCred.email,
          password: signupCred.password,
        })
      )
      .then((res) => {
        console.log("res", res);

        setUser({ loading: false, data: res.data, error: "" });
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
        setUser({ loading: false, data: [], error: err.message });
      });
  };
  const logIn = (e) => {
    e.preventDefault();
    console.log("loginCred", loginCred);

    axios
      .post(
        "/api/auth/login",
        JSON.stringify({
          email: loginCred.email,
          password: loginCred.password,
        })
      )
      .then((res) => {
        localStorage.setItem("token", res.data.encodedToken);
        setUser({ loading: false, data: res.data.foundUser, error: "" });
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
        setUser({ loading: false, data: [], error: err.message });
      });
  };
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(initialState);
  };
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/", { replace: true });
    }
  }, [isLoggedIn]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
      setUser(JSON.parse(localStorage.getItem("user")));
      navigate("/", { replace: true });
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        signUp,
        logIn,
        logOut,
        loginCred,
        setLoginCred,
        signupCred,
        setSignupCred,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
