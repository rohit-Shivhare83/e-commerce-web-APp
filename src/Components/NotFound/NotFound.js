import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">
        404 ! Page Not Found
      </h1>
      <h3 className=" text-body-emphasis my-3">0hhh no !.... you are lost</h3>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          placeat perspiciatis adipisci harum natus voluptate ratione esse,
          cupiditate voluptatum itaque, reiciendis pariatur molestias ullam.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary  px-4 gap-3">
            <NavLink to="/" className="text-light nav-link">
              Back to Home
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
