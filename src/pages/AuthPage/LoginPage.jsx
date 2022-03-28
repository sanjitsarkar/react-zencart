import React from "react";
import Header from "../../components/Header";
import { useAuth } from "../../context/AuthContext";

const LoginPage = () => {
  const {
    user,
    isLoggedIn,
    signUp,
    logIn,
    logOut,
    loginCred,
    setLoginCred,
    signupCred,
    setSignupCred,
  } = useAuth();
  return (
    <>
      <Header />
      <main className="form-container h-full t-0  l-0 r-0 relative grid place-content-center text-dark w-full">
        <form
          className="form p-5   br-sm text-dark b-solid b-1  br-light bx-sh-light-3 "
          onSubmit={logIn}
        >
          <label className="text-2xl mb-2 block text-center  font-normal">
            Login
          </label>
          <div className="col gap-1 mb-2">
            <div className="input-box input input-light">
              <i className="fa fa-user"></i>
              <input
                type="text"
                placeholder="Enter your email"
                className="input"
                defaultValue={loginCred.email}
                onChange={(e) =>
                  setLoginCred({ ...loginCred, email: e.target.value })
                }
                required
              />
            </div>
            <div className="input-box input input-light">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                placeholder="Enter your password"
                className="input"
                defaultValue={loginCred.password}
                onChange={(e) =>
                  setLoginCred({ ...loginCred, password: e.target.value })
                }
                required
              />
              <i className="fa fa-eye"></i>
            </div>

            <label className="checkbox-container">
              Remember Me
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
          <button className="btn btn-dark w-full text-lg mb-2">Login</button>
          <a href="#" className="text-dark-4 block mb-05">
            Forgot Password?
          </a>
          <a href="signup.html" className="text-dark-4 block">
            Don't have an account?
          </a>
        </form>
      </main>
    </>
  );
};

export default LoginPage;
