import React from "react";

export default function TownHousePost() {
  return (
    <section className="section post-section">
      <div className="container container-projects">
        <div className="post-spotlight">
          <div className="container heading-post container-news">
            <div className="heading-main">
              <h1>
                Danh sách các dự án bất động sản Nhà phố Jancy Nguyễn đang phân
                phối trong tháng 03/2025.
              </h1>
            </div>
            <div className="heading-sub">
              <h6>Cập nhật mới nhất ngày 09/03/2025 với 1 kết quả.</h6>
            </div>
          </div>
        </div>
        <div
          className="post-list row wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <div className="col-lg-4">
            <a href="/du-an/nha-pho-athens">
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
                        'url("https://atm244581-s3user.vcos.cloudstorage.com.vn/images/e43e98bb-1882-45bb-9197-6626e7e73f49/z5547561548310_7e6be2ca8b2d18e0b6a6945283ef6651.jpg")',
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
                <div className="project-tags">
                  <div className="tag-right"></div>
                </div>
                <p className="project-price">10 tỷ</p>
                <div className="project-content">
                  <span className="project-title">Nhà phố Athens</span>
                  <p className="project-description">
                    Trung tâm thủ đô của Athens, Hy Lạp
                  </p>
                  <p className="project-are">148 m²</p>
                  <p className="project-category">Nhà phố</p>
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
