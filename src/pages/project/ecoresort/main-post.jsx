import React from "react";

export default function EcoResortPost() {
  return (
    <section className="section post-section">
      <div className="container container-projects">
        <div className="post-spotlight">
          <div className="container heading-post container-news">
            <div className="heading-main">
              <h1>
                Danh sách các dự án bất động sản Khu nghỉ dưỡng Jancy Nguyễn
                đang phân phối trong tháng 03/2025.
              </h1>
            </div>
            <div className="heading-sub">
              <h6>Cập nhật mới nhất ngày 09/03/2025 với 3 kết quả.</h6>
            </div>
          </div>
        </div>
        <div
          className="post-list row wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <div className="col-lg-4">
            <a href="/du-an/terra-vi-glacier">
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
                        'url("https://atm244581-s3user.vcos.cloudstorage.com.vn/images/e43e98bb-1882-45bb-9197-6626e7e73f49/Terra-Vi-Glacier%20%281%29.jpg")',
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
                  <span className="project-title">Terra Vi - Glacier</span>
                  <p className="project-description">
                    Phía bắc tiểu bang Montana (Mỹ)
                  </p>
                  <p className="project-are">400000 hecta</p>
                  <p className="project-category">Khu nghỉ dưỡng</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4">
            <a href="/du-an/terra-vi-yosemite">
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
                        'url("https://atm244581-s3user.vcos.cloudstorage.com.vn/images/e43e98bb-1882-45bb-9197-6626e7e73f49/Terra-Vi-Yosemite%20%20%2823%29_2.jpg")',
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
                  <span className="project-title">Terra Vi - Yosemite</span>
                  <p className="project-description">
                    Groveland, quận Tuolumne, California
                  </p>
                  <p className="project-are">25 hecta</p>
                  <p className="project-category">Khu nghỉ dưỡng</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4">
            <a href="/du-an/terra-vi-marble-canyon">
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
                        'url("https://atm244581-s3user.vcos.cloudstorage.com.vn/images/e43e98bb-1882-45bb-9197-6626e7e73f49/Terra-Vi-Marble-Canyon%20%288%29_2.jpg")',
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
                  <span className="project-title">
                    Terra Vi - Marble Canyon
                  </span>
                  <p className="project-description">
                    Vườn quốc gia Grand Canyon, bang Arizona
                  </p>
                  <p className="project-are">160 hecta</p>
                  <p className="project-category">Khu nghỉ dưỡng</p>
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
