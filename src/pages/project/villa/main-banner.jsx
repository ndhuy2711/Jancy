import React from "react";

export default function VillaBanner() {
  return (
    <section className="head-banner-section">
      <div className="item small">
        <div
          className="background-image desktop"
          style={{
            backgroundImage:
              'url("https://hellojancy.com/images/hello-jancy_7.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>
        <div
          className="background-image mobile"
          style={{
            backgroundImage:
              'url("https://hellojancy.com/images/hello-jancy_9.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>
        <div className="content">
          <div className="container container-projects">
            <h1
              className="title wow fadeInDown"
              style={{ visibility: "visible", animationName: "fadeInDown" }}
            >
              Các dự án Jancy đang phân phối
            </h1>
            <p
              className="sub-title wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              Dự án chất lượng chuẩn mực và pháp lý rõ ràng từ các CĐT uy tín
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
