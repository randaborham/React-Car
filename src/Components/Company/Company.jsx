import React from "react";
import { FaCheck } from "react-icons/fa";
import map from "../../assesst/map989117027069c01f62b7c56e53fe91b1.png";
import img1 from "../../assesst/1.png";
import img2 from "../../assesst/2.png";
import img5 from "../../assesst/04b697b1b363c7711776de95e9183030.png";
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
import img3 from "../../assesst/db01351b0c15af518ba4698c6f240a22.png";
export default function Company() {
  return (
    <>
      <div className="header d-flex align-items-center text-light fw-bolder fs-1 justify-content-center">
        <p>عن الشركة</p>
      </div>
      <div className="container">
        <div className="row mt-3" style={{ direction: "rtl" }}>
          <div className="col-md-6 d-flex justify-content-center  align-items-center">
            <div className="div2">
              <div className="div1">
                <img src={img3} width={400} height={200} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="content">
              <h4>
                ما هي شركة
                <span style={{ color: " #EF8B22" }}> سترونج</span>
              </h4>
              <p className="para">
                يمكنك الآن أستجار السيارة التي تريدها في ثلات خطواط يمكنك الآن
                أستجار السيارة التي تريدها في ثلات خطواط يمكنك الآن أستجار
                السيارة التي تريدها في ثلات خطواطيمكنك الآن أستجار السيارة التي
                تريدها في ثلات خطواطيمكنك الآن أستجار السيارة التي تريدها في
                ثلات خطواطيمكنك الآن أستجار السيارة التي تريدها في ثلات
                خطواطيمكنك الآن أستجار السيارة التي تريدها في ثلات خطواطيمكنك
                الآن أستجار السيارة التي تريدها في ثلات خطواط يمكنك الآن أستجار
                السيارة التي تريدها في ثلات خطواط يمكنك الآن أستجار السيارة التي
                تريدها في ثلات خطواط.
              </p>
              <div className="boxss d-flex justify-content-evenly">
                <div className="crad small shadow">
                  <p className="fs-5 p-lg-4 p-2 fw-bold">
                    {" "}
                    <span style={{ color: "orange" }}>+ 650</span> تأجير{" "}
                    <br></br>سيارة شهريا
                  </p>
                </div>
                <div className="crad small shadow">
                  <p className="fs-5 p-lg-3 p-2 fw-bold">
                    {" "}
                    <span style={{ color: "orange" }}>+ 80</span> فرع في{" "}
                    <br></br>انحاء السعوديه{" "}
                  </p>
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

        <div className="container mb-4" style={{ direction: "rtl" }}>
          <div className="row g-2">
            <div className="col-md-3 col-sm-12">
              <div className="crad p-2" style={{ backgroundColor: " #FFF5E0" }}>
                <div className=" text-center">
                  <img src={im1} alt="" width={75} height={75} />
                  <h6 style={{ color: "orange" }}>مع سائق أو بدون</h6>
                  <p style={{ color: "#bbb" }}>
                    يمكنك الآن أستجار السيارة التي تريدها في ثلات خطواط يمكنك
                    الآن أستجار السيارة التي تريدها في ثلات خطواط.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className=" p-2" style={{ backgroundColor: " #FFF5E0" }}>
                <div className=" text-center">
                  <img src={im2} alt="" width={75} height={75} />
                  <h6 style={{ color: "orange" }}>
                    اختيار فئة السيارة المناسبة
                  </h6>
                  <p style={{ color: "#bbb" }}>
                    يمكنك الآن أستجار السيارة التي تريدها في ثلات خطواط يمكنك
                    الآن أستجار السيارة التي تريدها في ثلات خطواط.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className=" p-2" style={{ backgroundColor: " #FFF5E0" }}>
                <div className=" text-center">
                  <img src={im3} alt="" width={75} height={75} />
                  <h6 style={{ color: "orange" }}>
                    اختيار فئة السيارة المناسبة
                  </h6>
                  <p style={{ color: "#bbb" }}>
                    يمكنك الآن أستجار السيارة التي تريدها في ثلات خطواط يمكنك
                    الآن أستجار السيارة التي تريدها في ثلات خطواط.
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
                    يمكنك الآن أستجار السيارة التي تريدها في ثلات خطواط يمكنك
                    الآن أستجار السيارة التي تريدها في ثلات خطواط.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer" style={{ position: "relative" }}>
        <div className="container">
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
          <div className="row p-3" style={{ direction: "rtl" }}>
            <div className="col-md-6">
              {" "}
              <div
                className="content d-flex"
                style={{ flexDirection: "column" }}
              >
                <h6>مميزات تأجير السيارات لدينا للاستمتاع بها</h6>
                <p>
                  <FaCheck style={{ color: "orange" }} /> مع سائق أو بدون
                </p>
                <p>
                  <FaCheck style={{ color: "orange" }} /> خدمة التأمين الشامل
                  بدون نسبة تحمل
                </p>
                <p>
                  <FaCheck style={{ color: "orange" }} /> خدمة توصيل السيارة
                </p>
              </div>
            </div>
            <div className="col-md-6 " style={{}}>
              <div className="image">
                <img src={img1} alt="1" className="imgg2 "></img>
                <img
                  src={img2}
                  alt="1"
                  className="imgg1"
                  width={400}
                  height={200}
                ></img>
                <img
                  src={img3}
                  alt="1"
                  width={400}
                  height={200}
                  className="imgg3  im"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="map" style={{ position: "relative" }}>
          <FaLocationDot
            style={{
              position: "absolute",
              top: "50%",
              right: "50%",
              color: "#fff",
              fontSize: "50px",
            }}
          />
          <FaLocationDot
            style={{
              position: "absolute",
              top: "30%",
              right: "80%",
              color: "#ffff",
              fontSize: "50px",
            }}
          />
          <img src={map} alt="kk" className="w-100 h-100" />
        </div>
      </div>
    </>
  );
}
