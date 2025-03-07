export default function Banner() {
  return (
    <div className="main main-has-sub-menu">
      <section className="head-banner-section">
        <div className="item small">
          <div
            className="background-image desktop"
            style={{
              backgroundImage:
                "url('https://hellojancy.com/images/hello-jancy_7.jpg')",
              backgroundRepeat: "no-repeat; background-size: cover",
              backgroundPosition: "top",
            }}
          ></div>
          <div
            className="background-image mobile"
            style={{
              backgroundImage:
                "url('https://hellojancy.com/images/hello-jancy_9.jpg')",
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
                style={{ visibility: "visible", animationName: "fadeInUp;" }}
              >
                Dự án chất lượng chuẩn mực và pháp lý rõ ràng từ các CĐT uy tín
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="breadcrumb">
        <div className="container container-projects">
          <ul>
            <li className="breadcrumb-item">
              <a href="/">Trang chủ</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/du-an">Dự án</a>
            </li>
            <li className="breadcrumb-item active">
              <a href="/du-an/biet-thu#">Biệt thự</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="section post-section">
        <div className="container container-projects">
          <div className="post-spotlight">
            <div className="container heading-post container-news">
              <div className="heading-main">
                <h1>
                  Danh sách các dự án bất động sản Biệt thự Jancy Nguyễn đang
                  phân phối trong tháng 03/2025.
                </h1>
              </div>
              <div className="heading-sub">
                <h6>Cập nhật mới nhất ngày 07/03/2025 với 2 kết quả.</h6>
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
                    <div className="overlay"></div>
                    <div
                      className="project-image"
                      style={{
                        backgroundImage:
                          "url('https://atm244581-s3user.vcos.cloudstorage.com.vn/images/e43e98bb-1882-45bb-9197-6626e7e73f49/Sobha%20Hartland%20II-1.jpg')",
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
                    <div className="overlay"></div>
                    <div
                      className="project-image"
                      style={{
                        backgroundImage:
                          "url('https://atm244581-s3user.vcos.cloudstorage.com.vn/images/e43e98bb-1882-45bb-9197-6626e7e73f49/Untitled%20design%20-%202024-02-01T110814.728_1.png')",
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
                    <p className="project-description">
                      TP Paphos, Cộng Hoà Síp
                    </p>
                    <p className="project-are">1000 hecta</p>
                    <p className="project-category">Biệt thự</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
