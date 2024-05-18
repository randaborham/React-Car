import React from "react";
import { FaCheck } from "react-icons/fa";
import img1 from "../../assesst/1.png";
import img2 from "../../assesst/2.png";
import img3 from "../../assesst/db01351b0c15af518ba4698c6f240a22.png";
import img4 from "../../assesst/update.png";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { FaOldRepublic } from "react-icons/fa";
import { FaWheelchair } from "react-icons/fa";
import { FaFan } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa6";
import "./Home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="" style={{ position: "relative" }}>
      <div className="imagee"></div>
      {/* <div className="circle"></div> */}
      <div className="container">
        <div className="row p-lg-5 p-sm-2 " style={{ direction: "rtl" }}>
          <div className="col-md-6">
            <div className="content d-flex" style={{ flexDirection: "column" }}>
              <h1 className="">
                طريقة سهلة وسريعة لتأجير
                <span style={{ color: " #EF8B22" }}>سيارتك</span>
                <div className="colles"></div>
              </h1>
              <p>
                <FaCheck style={{ color: "orange" }} /> خدمة العملاء الممتازة
              </p>
              <p>
                <FaCheck style={{ color: "orange" }} /> أسعار تنافسية
              </p>
              <p>
                <FaCheck style={{ color: "orange" }} /> موقع ملائم{" "}
              </p>
              <p>
                <FaCheck style={{ color: "orange" }} /> شروط تأجير مرنة
              </p>
            </div>
          </div>
          <div className="col-md-6 " style={{}}>
            <div className="image">
              <img src={img1} alt="1" className="imgg2"></img>
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
                className="imgg3 "
              ></img>
            </div>
          </div>
        </div>
        <div
          className="content1 d-flex small shadow justify-content-between "
          style={{ direction: "rtl" }}
        >
          <div className="fw-bold border-end p-2">
            فئة السيارة
            <SlArrowDown style={{ color: "orange" }} />
          </div>
          <div className="fw-bold border-end p-2">
            فرع الأستلام
            <SlArrowDown style={{ color: "orange" }} />
          </div>
          <div className="fw-bold border-end p-2">
            وقت و تاريخ الأستلام
            <SlArrowDown style={{ color: "orange" }} />
          </div>
          <div className="fw-bold border-end p-2">
            وقت و تاريخ التسليم
            <SlArrowDown style={{ color: "orange" }} />
          </div>
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
            style={{ backgroundColor: "--var(--main-color)" }}
            className="bt ps-3 pe-3"
          >
            بحث
          </button>
        </div>

        <div className="row p-3 mt-5" style={{ direction: "rtl" }}>
          <div className="col-md-6 d-flex justify-content-center  align-items-center">
            <div className="div2">
              <div className="div1">
                <img src={img3} width={400} height={200} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="content">
              <h4 style={{ position: "relative" }} className="">
                يمكنك الآن أستجار السيارة التي تريدها<br></br> في
                <span style={{ color: " #EF8B22" }}> ثلات خطواط</span>
                <div className="colles1"></div>
              </h4>
              <p className="para">
                يمكنك الآن أستجار السيارة التي تريدها في ثلات خطواط يمكنك الآن
                أستجار السيارة التي تريدها في ثلات خطواط يمكنك الآن أستجار
                السيارة التي تريدها في ثلات خطواط يمكنك الآن أستجار السيارة التي
                تريدها في ثلات خطواط يمكنك الآن أستجار السيارة التي تريدها في
                ثلات خطواط يمكنك الآن أستجار السيارة التي تريدها في ثلات خطواط
                يمكنك الآن أستجار السيارة التي تريدها في ثلات خطواط يمكنك الآن
                أستجار السيارة التي تريدها في ثلات خطواط يمكنك الآن أستجار
                السيارة التي تريدها في ثلات خطواط يمكنك الآن أستجار السيارة التي
                تريدها في ثلات خطواط.
              </p>
              <p>
                <FaCheck style={{ color: "orange" }} /> تحديد الموقع والتاريخ
              </p>
              <p>
                <FaCheck style={{ color: "orange" }} /> اختيار السيارة المناسبة{" "}
              </p>
              <p>
                <FaCheck style={{ color: "orange" }} /> سدد واستلم السيارة{" "}
              </p>
              <div className="bttn text-center">
                <Link style={{ backgroundColor: " #007674" }} className=" btn2">
                  استأجر الآن
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer p-lg-4" style={{ position: "relative" }}>
        <div className="container">
          <img
            src={img4}
            width={200}
            height={200}
            style={{ opacity: "10%" }}
            alt="ll"
            className="imgfooter"
          ></img>
          <img
            src={img4}
            width={200}
            height={200}
            style={{ opacity: "10%" }}
            alt="ll"
            className="imgfooter2"
          ></img>
          <img
            src={img4}
            width={200}
            height={200}
            style={{ opacity: "10%" }}
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
