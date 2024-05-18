import React from "react";
import img2 from "../../assesst/04b697b1b363c7711776de95e9183030.png";
import im1 from "../../assesst/a.png";
import im2 from "../../assesst/b.png";
import im3 from "../../assesst/3.png";
import im4 from "../../assesst/4.png";
import img4 from "../../assesst/update.png";
import { ImPhone } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import "./Roots.css";
export default function Roots() {
  return (
    <div className="mb-4">
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6 crd">
            <h2 style={{ color: "#007674" }}>تواصل مع قطاع الأعمال</h2>
            <p className="mt-4" style={{ color: "#1e1e2e99" }}>
              يمكنك الآن التواصل معنا لمعرفة لمعرفة الأسئلة التي تريد إجابة لها
            </p>
            <div className="form">
              <div className="boxx1 mb-3">
                <div className="row">
                  <div className="col-md-6">
                    <div
                      className="form1 d-flex"
                      style={{ flexDirection: "column" }}
                    >
                      <label htmlFor="الاسم" className="fw-bold">
                        {" "}
                        الاسم
                      </label>
                      <input
                        type="text"
                        placeholder="ادخل اسمك"
                        className="form-control mb-2"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="form1 d-flex"
                      style={{ flexDirection: "column" }}
                    >
                      <label htmlFor="الاسم" className="fw-bold">
                        {" "}
                        الايميل
                      </label>
                      <input
                        type="email"
                        placeholder="ادخل ايميلك"
                        className="form-control mb-2"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="form1 d-flex"
                      style={{ flexDirection: "column" }}
                    >
                      <label htmlFor="الاسم" className="fw-bold">
                        {" "}
                        رقم الهاتف
                      </label>
                      <input
                        type="phone"
                        placeholder="ادخل رقم الهاتف"
                        className="form-control mb-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="boxx2">
                  <label htmlFor="">رسالتك</label>
                  <textarea
                    name=""
                    id=""
                    className="form-control mb-3 "
                  ></textarea>
                </div>
                <div className="button text-center  ">
                  <button
                    className="w-50 p-2 btn"
                    style={{ backgroundColor: "#007674", color: "#ffff" }}
                  >
                    ارسال
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6  d-flex justify-content-center  align-items-center">
            <div className="image7">
              <div className="image6 " style={{ backgroundColor: "orange " }}>
                <div className="mge">
                  <img src={img2} alt="imf"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="footer mb-lg-5" style={{ position: "relative" }}>
          <div className="container p-lg-5">
            <img
              src={img4}
              width={200}
              height={200}
              style={{ opacity: "50%" }}
              alt="ll"
              className="imgfooter"
            ></img>
            <img
              src={img4}
              width={200}
              height={200}
              style={{ opacity: "50%" }}
              alt="ll"
              className="imgfooter2"
            ></img>
            <img
              src={img4}
              width={200}
              height={200}
              style={{ opacity: "50%" }}
              alt="ll"
              className="imgfooter3"
            ></img>
            <h3 className="text-center mb-lg-4">تواصل مع قطاع الاعمال</h3>
            <div className="row g-lg-5">
              <div className="col-md-4">
                <div className="content d-flex">
                  <p
                    className="fs-4"
                    style={{ textDecorationLine: "underline" }}
                  >
                    {" "}
                    Marcos81@gmail.com
                    <MdOutlineEmail />
                  </p>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="content">
                  <p
                    className="fs-4"
                    style={{ textDecorationLine: "underline" }}
                  >
                    {" "}
                    64 شارع وادي الجيج,الخُبر
                    <FaLocationDot />
                  </p>
                </div>
              </div>

              <div className="col-md-4 ">
                <div className="content d-flex">
                  <p
                    className="fs-4"
                    style={{ textDecorationLine: "underline" }}
                  >
                    {" "}
                    +966580035754
                    <ImPhone />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="title d-flex justify-content-between m-3  align-items-center "
          style={{ direction: "rtl" }}
        >
          <div className="title1">
            <h3>الخدمات</h3>
            <div className="title3 d-flex" style={{ color: "orange" }}>
              <div
                className="me-1 ms-1"
                style={{
                  width: "10px",
                  height: "3px",
                  backgroundColor: "orange",
                  marginTop: "10px",
                }}
              ></div>
              <div
                className="me-1 ms-1"
                style={{
                  width: "10px",
                  height: "3px",
                  backgroundColor: "orange",
                  marginTop: "10px",
                }}
              ></div>
              <div
                className="me-1 ms-1"
                style={{
                  width: "10px",
                  height: "3px",
                  backgroundColor: "orange",
                  marginTop: "10px",
                }}
              ></div>
              <div
                className=""
                style={{
                  width: "10px",
                  height: "3px",
                  backgroundColor: "orange",
                  marginTop: "10px",
                }}
              ></div>
              <div
                style={{
                  width: "80px",
                  height: "3px",
                  backgroundColor: "orange",
                  marginTop: "10px",
                }}
              ></div>
            </div>
          </div>
          <div className="title2">
            <SlArrowRight style={{ color: "orange" }} />
            <SlArrowRight style={{ color: "orange" }} />
          </div>
        </div>
      </div>
      <div className="container" style={{ direction: "rtl" }}>
        <div className="row g-2">
          <div className="col-md-3 col-sm-12">
            <div className="crad p-2" style={{ backgroundColor: " #FFF5E0" }}>
              <div className=" text-center">
                <img src={im1} alt="" width={75} height={75} />
                <h6 style={{ color: "orange" }}>مع سائق أو بدون</h6>
                <p style={{ color: "#bbb" }}>
                  يمكنك الآن أستجار السيارة التي تريدها في ثلات خطواط يمكنك الآن
                  أستجار السيارة التي تريدها في ثلات خطواط.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className=" p-2" style={{ backgroundColor: " #FFF5E0" }}>
              <div className=" text-center">
                <img src={im2} alt="" width={75} height={75} />
                <h6 style={{ color: "orange" }}>اختيار فئة السيارة المناسبة</h6>
                <p style={{ color: "#bbb" }}>
                  يمكنك الآن أستجار السيارة التي تريدها في ثلات خطواط يمكنك الآن
                  أستجار السيارة التي تريدها في ثلات خطواط.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className=" p-2" style={{ backgroundColor: " #FFF5E0" }}>
              <div className=" text-center">
                <img src={im3} alt="" width={75} height={75} />
                <h6 style={{ color: "orange" }}>اختيار فئة السيارة المناسبة</h6>
                <p style={{ color: "#bbb" }}>
                  يمكنك الآن أستجار السيارة التي تريدها في ثلات خطواط يمكنك الآن
                  أستجار السيارة التي تريدها في ثلات خطواط.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className=" p-2" style={{ backgroundColor: " #FFF5E0" }}>
              <div className=" text-center">
                <img src={im4} alt="" width={75} height={75} />
                <h6 style={{ color: "orange" }}>خدمة التأمين الشامل</h6>
                <p style={{ color: "#bbb" }}>
                  يمكنك الآن أستجار السيارة التي تريدها في ثلات خطواط يمكنك الآن
                  أستجار السيارة التي تريدها في ثلات خطواط.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
