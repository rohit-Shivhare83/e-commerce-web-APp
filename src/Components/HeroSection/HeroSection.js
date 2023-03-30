import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = ({ myData }) => {
  const { name } = myData;
  return (
    <div className="container-fluid px-lg-5 hero-section">
      <div className="container p-lg-5 ">
        <div className="row align-items-start">
          <div className="col-sm-12 mb-3 mb-sm-0 col-md-12 col-lg-6 py-0 px-2">
            <div className="card  border border-0 ">
              <div className="card-body p-0">
                <p className="m-0 fw-light">Welcome To</p>
                <h2 className="card-title">{name}</h2>
                <p className="card-text fw-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum sint perspiciatis asperiores, sunt ex optio. Ratione
                  tenetur natus harum aliquid exercitationem voluptates ipsa,
                  doloribus accusamus qui, facilis nostrum numquam ducimus
                  incidunt eum neque, eius placeat ullam ut! Iste officiis saepe
                  consequuntur dignissimos molestiae. Tenetur eligendi, enim
                  reiciendis rem quod modi.
                </p>
                <NavLink className="btn btn-primary">Shop Now</NavLink>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 p-0">
            <div className="card border border-0 px-0 mx-0">
              <div className=" contain mx-auto">
                <img
                  className="img-fluid object-fit-cover  "
                  src="https://picsum.photos/id/237/450/260"
                  alt="Hero-Section-Img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
