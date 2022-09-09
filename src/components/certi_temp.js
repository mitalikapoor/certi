import React from "react";
import image1 from "../Assets/logo1.jpg";
import image2 from "../Assets/logo2.jpg";
import image3 from "../Assets/logo3.jpg";
import GB from "../Assets/gb logo.jpg";
import star from "../Assets/star-fill.svg";

function Certi(props) {
      var { Name, Position, DoJ} = props;       // not required if we follow the below method
      // getting the data from url
      const params = new URLSearchParams(window.location.search);
      // assigning in variables
      Name = params.get("name");
      Position = params.get("designation");
      let Rating = 5;
 return (
       <div className="mt-5" style={{ backgroundColor: "#F2E9E0" }}>
            <div className="bg-success">
                  <div className="row"></div>
            </div>
            <div className="container">
                  <div className="row-flex">
                        <div>
                              <img src={image1} alt="logo" className="p-3 m-3" style={{width: "20 px"}}/>
                              <img src={image2} alt="logo"  className="p-3 m-3" style={{width: "20 px"}}/>
                              <img src={image3} alt="logo"  className="p-3 m-3" style={{width: "20 px"}}/>
                        </div>
                  </div>
                  <div className="row ">
                        <div className="col-3 align-items-center">
                        <img src={GB} alt="logo"  className="p-3 m-3 w-75" />
                        </div>
                        <div className="col-9">
                              <div className="mb-0 pb-0">
                                    <div className="row">
                                          <p className="col-5 fw-light mb-0 pb-0" style={{ fontSize:'3rem' }}>Internship</p>
                                          <div className="col-7 d-flex align-items-center">
                                                {addStar(Rating)}
                                          </div>
                                    </div>
                                    <p className="fw-bold my-0 py-0" style={{ fontSize:'5rem' }}>Certificate</p>
                              </div>
                              <div className="my-0 py-0">
                                    <p className="fw-light" style={{ fontSize:'2rem' }}>This certificate awarded to</p>
                              </div>
                              <div>
                                    {Name}
                              </div>
                              <div className="fw-bold">
                                    has completed the Internship at GreenBhumi as
                              </div>
                              <div>
                                    {Position}
                              </div>
                              <div className="w-75">
                                    and has shown full contribution and dedication to our NGO/Organization. We enjoyed having you as an Intern at GreenBhumi. We wish you the best in your future endeavors.
                              </div>

                        </div>
                  </div>
            </div>
       </div>
 )
}

function addStar(count) {
      let stars = [];
      for (let index = 0; index < count; index++) {
            stars.push(<img src={star} className="p-1" alt="star" />);
      }
      return stars;
}

export default Certi;