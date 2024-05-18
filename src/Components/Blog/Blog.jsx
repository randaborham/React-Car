import React from "react";
import { FaCheck } from "react-icons/fa";
import img1 from "../../assesst/1.png";
import img2 from "../../assesst/2.png";
import img3 from "../../assesst/db01351b0c15af518ba4698c6f240a22.png";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { FaOldRepublic } from "react-icons/fa";
import { FaWheelchair } from "react-icons/fa";
import { FaFan } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa6";

export default function Blog() {
  return (
    <div>
      <div className="header d-flex align-items-center">
        <div className="container">
          <div className="">
            <p
              style={{ direction: "rtl", color: "#fff", fontSize: "70px" }}
              className=" fw-bolder fonts"
            >
              تصفح العروض الخاصة بنا <br></br>واختار الأنسب إليك
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="title d-flex justify-content-between m-3  align-items-center "
          style={{ direction: "rtl" }}
        >
          <div className="title1">
            <h3>عروض السيارات</h3>
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
        <div className="row mb-2">
          <div className="col-md-4">
            <div className="card small shadow">
              <img src={img3} className="p-2" alt="" />
              <div class="card-body">
                <h5 className="card-title text-center ">Suzuki S-Presso</h5>
                <div
                  className="card-text d-flex justify-content-between  align-items-center"
                  style={{ direction: "rtl" }}
                >
                  <div className="text2">
                    <p>
                      6700 <span style={{ color: "orange" }}>/اليوم</span>
                    </p>
                  </div>
                  <div className="text1">
                    <p
                      style={{
                        textDecorationLine: "line-through",
                        color: "#cccc",
                      }}
                    >
                      7500 <span>/اليوم</span>
                    </p>
                  </div>
                </div>
                <div
                  className="box d-flex justify-content-between"
                  style={{ direction: "rtl" }}
                >
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaGasPump style={{ color: "orange" }} />
                    <p>بنزين</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaOldRepublic style={{ color: "orange" }} />
                    <p>اوتوماتيك</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaFan style={{ color: "orange" }} />
                    <p>تكييف</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaWheelchair style={{ color: "orange" }} />
                    <p>4مقاعد</p>
                  </div>
                </div>
                <div className="cred">
                  <a
                    href="#"
                    className="btn bt cred"
                    style={{ color: "#fff" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    استأجرها الآن
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card small shadow">
              <img src={img3} className="p-2" alt="" />
              <div class="card-body">
                <h5 className="card-title text-center ">Suzuki S-Presso</h5>
                <div
                  className="card-text d-flex justify-content-between  align-items-center"
                  style={{ direction: "rtl" }}
                >
                  <div className="text2">
                    <p>
                      6700 <span style={{ color: "orange" }}>/اليوم</span>
                    </p>
                  </div>
                  <div className="text1">
                    <p
                      style={{
                        textDecorationLine: "line-through",
                        color: "#cccc",
                      }}
                    >
                      7500 <span>/اليوم</span>
                    </p>
                  </div>
                </div>
                <div
                  className="box d-flex justify-content-between"
                  style={{ direction: "rtl" }}
                >
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaGasPump style={{ color: "orange" }} />
                    <p>بنزين</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaOldRepublic style={{ color: "orange" }} />
                    <p>اوتوماتيك</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaFan style={{ color: "orange" }} />
                    <p>تكييف</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaWheelchair style={{ color: "orange" }} />
                    <p>4مقاعد</p>
                  </div>
                </div>

                <div className="cred">
                  <a
                    href="#"
                    className="btn bt cred"
                    style={{ color: "#fff" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    استأجرها الآن
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card small shadow">
              <img src={img3} className="p-2" alt="" />
              <div class="card-body">
                <h5 className="card-title text-center ">Suzuki S-Presso</h5>
                <div
                  className="card-text d-flex justify-content-between  align-items-center"
                  style={{ direction: "rtl" }}
                >
                  <div className="text2">
                    <p>
                      6700 <span style={{ color: "orange" }}>/اليوم</span>
                    </p>
                  </div>
                  <div className="text1">
                    <p
                      style={{
                        textDecorationLine: "line-through",
                        color: "#cccc",
                      }}
                    >
                      7500 <span>/اليوم</span>
                    </p>
                  </div>
                </div>
                <div
                  className="box d-flex justify-content-between"
                  style={{ direction: "rtl" }}
                >
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaGasPump style={{ color: "orange" }} />
                    <p>بنزين</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaOldRepublic style={{ color: "orange" }} />
                    <p>اوتوماتيك</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaFan style={{ color: "orange" }} />
                    <p>تكييف</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaWheelchair style={{ color: "orange" }} />
                    <p>4مقاعد</p>
                  </div>
                </div>
                <div className="cred">
                  <a
                    href="#"
                    className="btn bt cred"
                    style={{ color: "#fff" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    استأجرها الآن
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <div className="card small shadow">
              <img src={img3} className="p-2" alt="" />
              <div class="card-body">
                <h5 className="card-title text-center ">Suzuki S-Presso</h5>
                <div
                  className="card-text d-flex justify-content-between  align-items-center"
                  style={{ direction: "rtl" }}
                >
                  <div className="text2">
                    <p>
                      6700 <span style={{ color: "orange" }}>/اليوم</span>
                    </p>
                  </div>
                  <div className="text1">
                    <p
                      style={{
                        textDecorationLine: "line-through",
                        color: "#cccc",
                      }}
                    >
                      7500 <span>/اليوم</span>
                    </p>
                  </div>
                </div>
                <div
                  className="box d-flex justify-content-between"
                  style={{ direction: "rtl" }}
                >
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaGasPump style={{ color: "orange" }} />
                    <p>بنزين</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaOldRepublic style={{ color: "orange" }} />
                    <p>اوتوماتيك</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaFan style={{ color: "orange" }} />
                    <p>تكييف</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaWheelchair style={{ color: "orange" }} />
                    <p>4مقاعد</p>
                  </div>
                </div>
                <div className="cred">
                  <a
                    href="#"
                    className="btn bt cred"
                    style={{ color: "#fff" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    استأجرها الآن
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card small shadow">
              <img src={img3} className="p-2" alt="" />
              <div class="card-body">
                <h5 className="card-title text-center ">Suzuki S-Presso</h5>
                <div
                  className="card-text d-flex justify-content-between  align-items-center"
                  style={{ direction: "rtl" }}
                >
                  <div className="text2">
                    <p>
                      6700 <span style={{ color: "orange" }}>/اليوم</span>
                    </p>
                  </div>
                  <div className="text1">
                    <p
                      style={{
                        textDecorationLine: "line-through",
                        color: "#cccc",
                      }}
                    >
                      7500 <span>/اليوم</span>
                    </p>
                  </div>
                </div>
                <div
                  className="box d-flex justify-content-between"
                  style={{ direction: "rtl" }}
                >
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaGasPump style={{ color: "orange" }} />
                    <p>بنزين</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaOldRepublic style={{ color: "orange" }} />
                    <p>اوتوماتيك</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaFan style={{ color: "orange" }} />
                    <p>تكييف</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaWheelchair style={{ color: "orange" }} />
                    <p>4مقاعد</p>
                  </div>
                </div>

                <div className="cred">
                  <a
                    href="#"
                    className="btn bt cred"
                    style={{ color: "#fff" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    استأجرها الآن
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card small shadow">
              <img src={img3} className="p-2" alt="" />
              <div class="card-body">
                <h5 className="card-title text-center ">Suzuki S-Presso</h5>
                <div
                  className="card-text d-flex justify-content-between  align-items-center"
                  style={{ direction: "rtl" }}
                >
                  <div className="text2">
                    <p>
                      6700 <span style={{ color: "orange" }}>/اليوم</span>
                    </p>
                  </div>
                  <div className="text1">
                    <p
                      style={{
                        textDecorationLine: "line-through",
                        color: "#cccc",
                      }}
                    >
                      7500 <span>/اليوم</span>
                    </p>
                  </div>
                </div>
                <div
                  className="box d-flex justify-content-between"
                  style={{ direction: "rtl" }}
                >
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaGasPump style={{ color: "orange" }} />
                    <p>بنزين</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaOldRepublic style={{ color: "orange" }} />
                    <p>اوتوماتيك</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaFan style={{ color: "orange" }} />
                    <p>تكييف</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaWheelchair style={{ color: "orange" }} />
                    <p>4مقاعد</p>
                  </div>
                </div>
                <div className="cred">
                  <a
                    href="#"
                    className="btn bt cred"
                    style={{ color: "#fff" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    استأجرها الآن
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <div className="card small shadow">
              <img src={img3} className="p-2" alt="" />
              <div class="card-body">
                <h5 className="card-title text-center ">Suzuki S-Presso</h5>
                <div
                  className="card-text d-flex justify-content-between  align-items-center"
                  style={{ direction: "rtl" }}
                >
                  <div className="text2">
                    <p>
                      6700 <span style={{ color: "orange" }}>/اليوم</span>
                    </p>
                  </div>
                  <div className="text1">
                    <p
                      style={{
                        textDecorationLine: "line-through",
                        color: "#cccc",
                      }}
                    >
                      7500 <span>/اليوم</span>
                    </p>
                  </div>
                </div>
                <div
                  className="box d-flex justify-content-between"
                  style={{ direction: "rtl" }}
                >
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaGasPump style={{ color: "orange" }} />
                    <p>بنزين</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaOldRepublic style={{ color: "orange" }} />
                    <p>اوتوماتيك</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaFan style={{ color: "orange" }} />
                    <p>تكييف</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaWheelchair style={{ color: "orange" }} />
                    <p>4مقاعد</p>
                  </div>
                </div>
                <div className="cred">
                  <a
                    href="#"
                    className="btn bt cred"
                    style={{ color: "#fff" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    استأجرها الآن
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card small shadow">
              <img src={img3} className="p-2" alt="" />
              <div class="card-body">
                <h5 className="card-title text-center ">Suzuki S-Presso</h5>
                <div
                  className="card-text d-flex justify-content-between  align-items-center"
                  style={{ direction: "rtl" }}
                >
                  <div className="text2">
                    <p>
                      6700 <span style={{ color: "orange" }}>/اليوم</span>
                    </p>
                  </div>
                  <div className="text1">
                    <p
                      style={{
                        textDecorationLine: "line-through",
                        color: "#cccc",
                      }}
                    >
                      7500 <span>/اليوم</span>
                    </p>
                  </div>
                </div>
                <div
                  className="box d-flex justify-content-between"
                  style={{ direction: "rtl" }}
                >
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaGasPump style={{ color: "orange" }} />
                    <p>بنزين</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaOldRepublic style={{ color: "orange" }} />
                    <p>اوتوماتيك</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaFan style={{ color: "orange" }} />
                    <p>تكييف</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaWheelchair style={{ color: "orange" }} />
                    <p>4مقاعد</p>
                  </div>
                </div>

                <div className="cred">
                  <a
                    href="#"
                    className="btn bt cred"
                    style={{ color: "#fff" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    استأجرها الآن
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card small shadow">
              <img src={img3} className="p-2" alt="" />
              <div class="card-body">
                <h5 className="card-title text-center ">Suzuki S-Presso</h5>
                <div
                  className="card-text d-flex justify-content-between  align-items-center"
                  style={{ direction: "rtl" }}
                >
                  <div className="text2">
                    <p>
                      6700 <span style={{ color: "orange" }}>/اليوم</span>
                    </p>
                  </div>
                  <div className="text1">
                    <p
                      style={{
                        textDecorationLine: "line-through",
                        color: "#cccc",
                      }}
                    >
                      7500 <span>/اليوم</span>
                    </p>
                  </div>
                </div>
                <div
                  className="box d-flex justify-content-between"
                  style={{ direction: "rtl" }}
                >
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaGasPump style={{ color: "orange" }} />
                    <p>بنزين</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaOldRepublic style={{ color: "orange" }} />
                    <p>اوتوماتيك</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaFan style={{ color: "orange" }} />
                    <p>تكييف</p>
                  </div>
                  <div
                    className="crtona d-flex justify-content-center  align-items-center "
                    style={{ flexDirection: "column" }}
                  >
                    <FaWheelchair style={{ color: "orange" }} />
                    <p>4مقاعد</p>
                  </div>
                </div>
                <div className="cred">
                  <a
                    href="#"
                    className="btn bt cred"
                    style={{ color: "#fff" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    استأجرها الآن
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content text-center">
              <div class="modal-body">
                <h1
                  class="modal-title fs-5 fw-bolder mb-4  text-center"
                  id="exampleModalLabel"
                  style={{ color: "#007674" }}
                >
                  حجز سيارة
                </h1>
                <p className="" style={{ fontSize: "15px" }}>
                  يمكنك الآن التواصل معنا لمعرفة لمعرفة الأسئلة التي تريد إجابة
                  لها{" "}
                </p>
                <label htmlFor="الاسم" className="fw-bold">
                  {" "}
                  الاسم
                </label>
                <input
                  type="text"
                  placeholder="ادخل اسمك"
                  className="form-control mb-2"
                />

                <label htmlFor="الاسم" className="fw-bold">
                  {" "}
                  الايميل
                </label>
                <input
                  type="email"
                  placeholder="ادخل ايميلك"
                  className="form-control mb-2"
                />

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
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  الغاء
                </button>
                <button type="button" class="btn btn-primary">
                  ارسال
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
