import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound: FC = () => {
  return (
    <div className="not-found text-center mt-5">
      <img
        src="https://th.bing.com/th/id/OIP.heeZQ84fzkgUzWydY8ZmPwHaC2?pid=ImgDet&rs=1"
        alt="Page not found"
      />{" "}
      <br />
      <h4>
        <span>
          <Link to="/" className="btn btn-lg btn-primary">
            Return Home
          </Link>
        </span>
      </h4>
    </div>
  );
};
export default NotFound;
