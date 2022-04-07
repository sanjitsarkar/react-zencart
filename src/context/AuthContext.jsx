import axios from "axios";
import React, { useEffect, useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "./ToastContext";

const AuthContext = createContext();
const initialState = {
  loading: true,
  data: [],
  error: "",
};
const initialSignUpCred = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
};
const initialLoginCred = { email: "", password: "" };
const AuthProvider = ({ children }) => {
  const { setToast } = useToast();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage?.getItem("token"));
  const [user, setUser] = useState(initialState);
  const [loginCred, setLoginCred] = useState(initialLoginCred);
  const [signupCred, setSignupCred] = useState(initialSignUpCred);

  const signUp = (e) => {
    e.preventDefault();
    if (signupCred.password !== signupCred.confirmPassword) {
      setToast({
        show: true,
        content: "Passwords do not match",
        type: "info",
      });
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
        setToast({
          show: true,
          content: `Welcome, ${res.data.createdUser.firstName}`,
          type: "info",
        });
        setUser({ loading: false, data: res.createdUser, error: "" });
        setIsLoggedIn(true);
      })
      .catch((err) => {
        if (err.message)
          setToast({
            show: true,
            content: "Email is already registered",
            type: "error",
          });

        setUser({ loading: false, data: [], error: err.message });
      });
  };
  const logIn = (e) => {
    e.preventDefault();
    axios
      .post(
        "/api/auth/login",
        JSON.stringify({
          email: loginCred.email,
          password: loginCred.password,
        })
      )
      .then((res) => {
        setToast({
          show: true,
          content: `Welcome, ${res.data.foundUser.firstName}`,
          type: "info",
        });
        localStorage.setItem("token", res.data.encodedToken);

        setUser({ loading: false, data: res.data.foundUser, error: "" });
        setIsLoggedIn(true);
      })
      .catch((err) => {
        if (err.message.slice(err.message.lastIndexOf(" ") + 1) === "401")
          setToast({
            show: true,
            content: "Wrong Password",
            type: "error",
          });
        else if (err.message.slice(err.message.lastIndexOf(" ") + 1) === "404")
          setToast({
            show: true,
            content: "Email is not registered yet",
            type: "error",
          });
        else setToast({ show: true, content: err.message, type: "error" });

        setUser({ loading: false, data: [], error: err.message });
      });
  };
  const logOut = () => {
    setToast({
      show: true,
      content: `Goodbye, ${user.data.firstName}`,
      type: "warning",
    });
    setSignupCred(initialSignUpCred);
    setLoginCred(initialLoginCred);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(initialState);
  };
  useEffect(() => {
    if (isLoggedIn) {
      setToken(localStorage.getItem("token"));
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/", { replace: true });
    }
  }, [isLoggedIn]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      setIsLoggedIn(true);
      setUser(JSON.parse(localStorage.getItem("user")));
      navigate("/", { replace: true });
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        token,
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
