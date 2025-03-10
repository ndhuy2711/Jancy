import React from "react";

export default function PostBanner() {
  return (
    <section className="head-banner-section">
      <div className="item small">
        <div
          className="background-image desktop"
          style={{
            backgroundImage:
              'url("https://hellojancy.com/images/HELLO-JANCY-BANNER-2%20%281%29-51124.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />
        <div
          className="background-image mobile"
          style={{
            backgroundImage:
              'url("https://hellojancy.com/images/HELLO-JANCY-BANNER-BAI-VIET%20%281%29-97051.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />
        <div className="content">
          <div className="container container-news">
            <h1
              className="title wow fadeInDown"
              style={{ visibility: "visible", animationName: "fadeInDown" }}
            >
              Cập nhật và chia sẻ thông tin BĐS
            </h1>
            <p
              className="sub-title wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              Đăng ký nhận thông tin cập nhật mới và đầy đủ từ Jancy
            </p>
            <button
              className="btn btn-primary wow fadeInUp"
              data-source="News"
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
