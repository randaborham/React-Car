import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import "./Topnav.css";
export default function Topnav() {
  return (
    <div className="footer top">
      <div className="container">
        <div className="row">
          <div className="col-md-3 ">
            <div className="content">
              <FaFacebookF className="ms-2 " />
              <FaInstagram className="ms-2 " />
              <FaWhatsapp className="ms-2 " />
              <FaYoutube className="ms-2 " />
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="content d-flex">
              <p className="fs-10" style={{ textDecorationLine: "underline" }}>
                {" "}
                <MdOutlineEmail />
                Marcos81@gmail.com
              </p>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="content">
              <p>
                {" "}
                <FaLocationDot />
                64 شارع وادي الجيج,الخُبر
              </p>
            </div>
          </div>

          <div className="col-md-3 ">
            <div className="content d-flex">
              <p>
                {" "}
                <ImPhone />
                +966580035754
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
