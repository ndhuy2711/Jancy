import React from "react";

export default function VillaPost() {
  return (
    <section className="section post-section">
      <div className="container container-projects">
        <div className="post-spotlight">
          <div className="container heading-post container-news">
            <div className="heading-main">
              <h1>
                Danh sách các dự án bất động sản Biệt thự Jancy Nguyễn đang phân
                phối trong tháng 03/2025.
              </h1>
            </div>
            <div className="heading-sub">
              <h6>Cập nhật mới nhất ngày 09/03/2025 với 2 kết quả.</h6>
            </div>
          </div>
        </div>
        <div
          className="post-list row wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <div className="col-lg-4">
            <a href="/du-an/sobha-hartland-ii">
              <div
                className="project-item wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="image-box">
                  <div className="overlay" />
                  <div
                    className="project-image"
                    style={{
                      backgroundImage:
                        'url("https://atm244581-s3user.vcos.cloudstorage.com.vn/images/e43e98bb-1882-45bb-9197-6626e7e73f49/Sobha%20Hartland%20II-1.jpg")',
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
                <div className="project-tags">
                  <div className="tag-right"></div>
                </div>
                <div className="project-content">
                  <span className="project-title">Sobha Hartland II</span>
                  <p className="project-description">
                    58GG+6MX, Bukadra, Nad Al Sheba 1, Dubai
                  </p>
                  <p className="project-are">8000000 m²</p>
                  <p className="project-category">Căn hộ, Biệt thự</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4">
            <a href="/du-an/venus-rock">
              <div
                className="project-item wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="image-box">
                  <div className="overlay" />
                  <div
                    className="project-image"
                    style={{
                      backgroundImage:
                        'url("https://atm244581-s3user.vcos.cloudstorage.com.vn/images/e43e98bb-1882-45bb-9197-6626e7e73f49/Untitled%20design%20-%202024-02-01T110814.728_1.png")',
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
                <div className="project-tags">
                  <div className="tag-right"></div>
                </div>
                <p className="project-price">25 tỷ - 80 tỷ</p>
                <div className="project-content">
                  <span className="project-title">Venus Rock</span>
                  <p className="project-description">TP Paphos, Cộng Hoà Síp</p>
                  <p className="project-are">1000 hecta</p>
                  <p className="project-category">Biệt thự</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/*Start paging*/}
        {/*End paging*/}
      </div>
    </section>
  );
}
