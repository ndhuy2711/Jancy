import React from "react";

export default function RecruitmentBanner() {
  return (
    <section className="head-banner-section">
      <div className="item small">
        <div
          className="background-image desktop"
          style={{
            backgroundImage:
              'url("https://hellojancy.com/images/jancy-BANNER-tuyen-dung-1%20%281%29.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />
        <div
          className="background-image mobile"
          style={{
            backgroundImage:
              'url("https://hellojancy.com/images/hello-jancy-banner-phone-1%20%283%29.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />
        <div className="content">
          <div className="container container-recruitment">
            <h1
              className="title wow fadeInDown"
              style={{ visibility: "visible", animationName: "fadeInDown" }}
            >
              Tham gia cùng Jancy
            </h1>
            <p
              className="sub-title wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              Môi trường thúc đẩy sự phát triển cá nhân, nâng cao thu nhập, và
              tầm nhìn quốc tế.
            </p>
            <button
              className="btn btn-primary wow fadeInUp"
              data-source="Recruitment"
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
