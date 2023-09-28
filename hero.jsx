import React from "react";
import icon1 from "../assets/images/icons/icon1.png";
import icon2 from "../assets/images/icons/icon2.png";
import icon3 from "../assets/images/icons/icon3.png";
import icon4 from "../assets/images/icons/icon4.png";
import icon5 from "../assets/images/icons/icon5.png";
import icon6 from "../assets/images/icons/icon6.png";

const hero = () => {
  return (
    <>
   <section className="hero  d-flex align-items-center justify-content-around ">
 

        <div className="d-flex justify-content-center align-items-center text-center  ">
        <div className="card-details">

          <div className="card "
         
            style={{ width: "100px", margin: "50px",p:'5' }}
          >
            <img src={icon1} className="img-fluid" alt="icon1" />

            <p className="">
                Quick shipping
            </p>
          </div>
        </div>
        </div>
       
        <div className="d-flex justify-content-center align-items-center text-center ">
          <div className="card align-items-start"
            style={{ width: "100px", margin: "50px" }}
          >
            <img src={icon2} className="img-fluid" alt="icon1" />

            <p className="">
       free Delivery
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center text-center ">
          <div className="card "
            style={{ width: "100px", margin: "50px" }}
          >
            <img src={icon3} className="img-fluid" alt="icon1" />

            <p className="">
            High Saves
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center text-center ">
          <div className="card "
            style={{ width: "100px", margin: "50px" }}
          >
            <img src={icon4} className="img-fluid" alt="icon1" />

            <p className="">
            24/7 Support
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center text-center ">
          <div className="card "
            style={{ width: "100px", margin: "50px" }}
          >
            <img src={icon5} className="img-fluid" alt="icon1" />

            <p className="">
    Discounts
            </p>
          </div>
        </div>
       
      </section>
    </>
  );
};

export default hero;
