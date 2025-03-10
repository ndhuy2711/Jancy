import React from "react";

export default function ServiceBanner() {
  return (
    <section className="head-banner-section">
      <div className="item small">
        <div
          className="background-image desktop"
          style={{
            backgroundImage:
              'url("https://hellojancy.com/images/hello-jancy-banner%20%287%29-84235.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />
        <div
          className="background-image mobile"
          style={{
            backgroundImage:
              'url("https://hellojancy.com/images/SERVICES-HELLO-JANCY%20%284%29-28405.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />
        <div className="content">
          <div className="container container-members">
            <h1
              className="title wow fadeInDown"
              style={{ visibility: "visible", animationName: "fadeInDown" }}
            >
              Jancy Cung Cấp Các Dịch Vụ Chuyên Nghiệp
            </h1>
            <p
              className="sub-title wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              Mang Lại Giá Trị Và Hiệu Quả Vượt Trội
            </p>
            <button
              className="btn btn-primary wow fadeInUp"
              data-source="Members"
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
