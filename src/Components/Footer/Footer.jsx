import React from "react";
import img from "../../assesst/c7ef03beddef6648a51b9c672dfec93e.png";
import img2 from "../../assesst/989117027069c01f62b7c56e53fe91b1.png";
import img3 from "../../assesst/update.png";
import img4 from "../../assesst/photo_2024-05-07_14-04-47-removebg-preview.png";
import { ImPhone } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      className="footer pt-lg-5  pt-md-5 mt-5"
      style={{ position: "relative" }}
    >
      <div className="container">
        <img
          src={img3}
          width={200}
          height={200}
          style={{ opacity: "10%" }}
          alt="ll"
          className="imgfooter"
        ></img>
        <img
          src={img3}
          width={200}
          height={200}
          style={{ opacity: "10%" }}
          alt="ll"
          className="imgfooter2"
        ></img>
        <img
          src={img3}
          width={200}
          height={200}
          style={{ opacity: "10%" }}
          alt="ll"
          className="imgfooter3"
        ></img>
        <div className="row g-5">
          <div className="col-md-3 ">
            <div className="content">
              <img src={img4} alt="logo" className="w-100"></img>
              <img
                src={img2}
                alt="logo"
                className=" w-100 img2"
                height={200}
              ></img>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="content pe-lg-5">
              <h4>تواصل معنا</h4>
              <p>
                {" "}
                <ImPhone />
                +966580035754
              </p>
              <p>
                {" "}
                <FaLocationDot />
                64 شارع وادي الجيج,الخُبر
              </p>
              <p style={{ textDecorationLine: "underline" }}>
                {" "}
                <MdOutlineEmail />
                Marcos81@gmail.com
              </p>
            </div>
          </div>
          <div className="col-md-3  ">
            <div className="content pe-lg-5">
              <h4>من نحن</h4>
              <p>التوظيف</p>
              <p>الشروط والأحكام</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="content out">
              <input
                type="text"
                className="form-control"
                placeholder="ادخل ايميلك"
              ></input>
              <button
                className="btn btn-outline-secondary input"
                type="button"
                id="button-addon1"
              >
                اشترك
              </button>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className="row" style={{ position: "relative" }}>
          <div className="col-md-6">
            <div className="content">
              <p> جميع الحقوق محفوظه @ سترونج Digital code</p>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="content " style={{ marginRight: "250px" }}>
              <FaFacebookF className="ms-lg-2 social" />
              <FaInstagram className="ms-lg-2 social" />
              <FaWhatsapp className="ms-lg-2 social" />
              <FaYoutube className="ms-lg-2 social" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
