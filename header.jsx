import React from "react";
import { MdOutlineAddIcCall } from "react-icons/md";
import { ImMail } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/apneck.png";
import { MdOutlineMoveToInbox } from "react-icons/md";
import {MdShoppingCart} from "react-icons/md"
import {MdOutlineAccountCircle} from "react-icons/md"
const header = () => {
const location= useLocation();
  return (
    <>
      <header className="header-top-strip p-1 px-4 shadow-sm">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-6">
              <p>The trending outfits at 100% off</p>
            </div>

            <div className="col-6 d-flex justify-content-between">
              <div>
                <a href="tel:+2453458974">Call Us + 2453458974</a>
              </div>
              <div>
                <Link>
                  <MdOutlineAddIcCall className="fs-3 mx-4" />
                </Link>
                <Link>
                  {" "}
                  <ImMail className="fs-3 mx-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper px-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2 m-auto">
              <Link to="/">
                <img src={logo} alt="logo" className="logo" />
              </Link>
            </div>

            <div className="col-3 p-3 d-flex align-items-center mt-3 mb-2">
              <div class="input-group m-auto">
                <span className="input-group-text" id="basic-addon2">
                  All
                </span>
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Search products"
                  aria-label="Search products"
                  aria-describedby="basic-addon2"
                />
                <button className="input-group-text" id="basic-addon2">
                  Search
                </button>
              </div>
            </div>
            <div className=" nav-links col-4 d-flex align-items-center justify-content-between text-center m-auto ">
              <Link to={"/"} className={location.pathname==='/'? "active": "inactive"}> Home</Link>
              <Link to={"/shop"} className={location.pathname==='/shop'? "active": "inactive"}>Shop</Link>
              <Link to={"/blog"} className={location.pathname==='/blog'? "active": "inactive"}>Blog</Link>
              <Link to={"/about"} className={location.pathname==='/about'? "active": "inactive"}>About</Link>
              <Link to={"/contact"} className={location.pathname==='/contact'? "active": "inactive"}>Contact</Link>
            </div>
            <div className=" nav-links-nav col-3 d-flex align-items-center justify-content-around ">
              <Link  to={'wishlist'} className={location.pathname ==='/wishlist'?  "active": "inactive" }  >
                <MdOutlineMoveToInbox className="fs-3 mx-2 m b-0  " />
                <p>wishlist</p>
              </Link>

              <Link to={'accounts'} className={location.pathname ==='/wishlist'? "active": "inactive" } >
                <MdOutlineAccountCircle className="fs-3 mx-2 m b-0" />
                <p>Accounts</p>
              </Link>

              <Link to={'cart'} className={location.pathname ==='/wishlist'? "active": "inactive" } >
                <MdShoppingCart className="fs-4 mx-1 m b-0" />
                <p>Cart</p>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default header;
