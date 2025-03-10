import React from "react";

export default function AboutMeBanner() {
  return (
    <section
      className="head-banner-section"
      style={{ paddingTop: "5px !important" }}
    >
      <div className="item big-about">
        <div
          className="background-image desktop"
          style={{
            backgroundImage:
              'url("https://hellojancy.com/images/jancy-banner-1-33911.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="background-image mobile"
          style={{
            backgroundImage:
              'url("https://hellojancy.com/images/hello-jancy-banner-phone-5%20%288%29-35973.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="content">
          <div className="container container-about">
            <h1
              className="title wow fadeInDown"
              style={{ visibility: "visible", animationName: "fadeInDown" }}
            >
              Jancy
            </h1>
            <p
              className="sub-title wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              Thành công trong BĐS đến từ việc giao tiếp cá nhân và thiết lập
              kết nối bằng cách xác định nhu cầu và mong đợi của KH ngay từ đầu
            </p>
            <button
              className="btn btn-primary wow fadeInUp"
              data-source="AboutUs"
              data-bs-toggle="modal"
              data-bs-target="#contact-modal"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              Liên hệ ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
