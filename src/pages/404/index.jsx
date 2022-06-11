import React from "react";
import { Link } from "react-router-dom";
import NotAvailable from "../../components/NotAvailable";
import PageNotFoundImage from "./404.png";
const PageNotFound = () => {
  return (
    <div className="w-screen h-screen text-light">
      <NotAvailable
        img={PageNotFoundImage}
        classes="h-full"
        title="It's seems like you are lost"
        children={
          <Link to="/">
            <button className="btn btn-secondary text-lg">
              Go back to home
            </button>
          </Link>
        }
      />
    </div>
  );
};

export default PageNotFound;
