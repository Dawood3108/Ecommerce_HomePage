import React from "react";
import Blog1 from "../assets/images/blog/blog-1.jpg";
import Blog2 from "../assets/images/blog/blog-2.jpg";
import Blog3 from "../assets/images/blog/blog-3.jpg";
import Blog4 from "../assets/images/blog/blog-4.jpg";

import {BsFillArrowRightCircleFill} from "react-icons/bs"
const blog = () => {
  return (
    <>
    <section>
    
 <div className="row">
     <div className="col-3 d-flex align-items-center justify-content-center ">
      
        <div className="card">
          <img src={Blog1} className="card-img-top img-fluid m-4" />

          <div className="card-body">
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              possiearum! Fuga, placeat vel! Dignissimos quaerat molestiae
              facere similique voluptas maxime. Commodi inventore a unde!
            </p>
            <button className="button-blog">
              Learn More
              <span className="color-black">{BsFillArrowRightCircleFill}</span>
            </button>
          </div>
        </div>
        
        </div> 
     
        <div className="col-3 col-3 d-flex align-items-center justify-content-center">
      
      <div className="card">
        <img src={Blog2} className="card-img-top img-fluid m-4" />

        <div className="card-body">
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            possiearum! Fuga, placeat vel! Dignissimos quaerat molestiae
            facere similique voluptas maxime. Commodi inventore a unde!
          </p>
          <button className="button-blog">
            Learn More
            <span className="color-black">{BsFillArrowRightCircleFill}</span>
          </button>
        </div>
      </div>
      
      </div> 

      <div className="col-3 col-3 d-flex align-items-center justify-content-center ">
      
      <div className="card">
        <img src={Blog3} className="card-img-top img-fluid m-4" />

        <div className="card-body">
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            possiearum! Fuga, placeat vel! Dignissimos quaerat molestiae
            facere similique voluptas maxime. Commodi inventore a unde!
          </p>
          <button className="button-blog">
            Learn More
            <span className="color-black">{BsFillArrowRightCircleFill}</span>
          </button>
        </div>
      </div>
      
      </div> 


      <div className="col-3 col-3 d-flex align-items-center justify-content-center ">
      
      <div className="card">
        <img src={Blog4} className="card-img-top img-fluid m-4" />

        <div className="card-body">
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            possiearum! Fuga, placeat vel! Dignissimos quaerat molestiae
            facere similique voluptas maxime. Commodi inventore a unde!
          </p>
          <button className="button-blog">
            Learn More
            <span className="color-black">{BsFillArrowRightCircleFill}</span>
          </button>
        </div>
      </div>
      
   
      </div>
      </div>
      </section>
       
   </>
  );
};

export default blog;
