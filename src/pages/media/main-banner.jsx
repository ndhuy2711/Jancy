import React from "react";

export default function MediaBanner() {
  return (
    <section className="head-banner-section">
      <div className="item small">
        <div
          className="background-image desktop"
          style={{
            backgroundImage:
              'url("https://hellojancy.com/images/JANCY%20%282%29.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />
        <div
          className="background-image mobile"
          style={{
            backgroundImage:
              'url("https://hellojancy.com/images/JANCY-1%20%282%29.jpg")',
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
              Trải nghiệm BĐS cùng Jancy
            </h1>
            <p
              className="sub-title wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            />
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
