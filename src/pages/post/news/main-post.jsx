import React from "react";

export default function NewsPost() {
  return (
    <section className="section post-section">
      <div className="container container-projects">
        <div className="post-spotlight">
          <div className="container heading-post container-news">
            <div className="heading-main">
              <h1>
                Các nội dung tổng hợp Tin tức mới nhất từ thị trường trong tháng
                03/2025 từ Jancy Nguyễn.
              </h1>
            </div>
            <div className="heading-sub">
              <h6>Cập nhật mới nhất ngày 09/03/2025 với 6 kết quả.</h6>
            </div>
          </div>
          <div className="container container-news">
            <div
              className="main-post wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div className="image-box">
                <div
                  className="image"
                  style={{
                    backgroundImage:
                      'url("https://hellojancy.com/images/HELLO-JANCY-BANNER-BAI-VIET-1-57384.jpg")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <div className="main-post-content">
                <h2>
                  <a
                    href="/bai-viet/can-ho-cao-cap-trung-tam-paphos-da-hoan-thanh"
                    className="post-title"
                  >
                    Chương trình Golden Visa Tây Ban Nha qua đầu tư BĐS sẽ dừng
                    lại từ tháng 1/2025
                  </a>
                </h2>
                <span className="post-date">18/03/2024 04:21:19</span>
                <p className="post-description">
                  Ngày 14/11 quốc hội Tây Ban Nha đã thông báo ctrinh Golden
                  Visa Tây Ban Nha thông qua việc đầu tư BĐS sẽ dừng lại vào
                  T1/2025.
                </p>
                <a
                  href="/bai-viet/can-ho-cao-cap-trung-tam-paphos-da-hoan-thanh"
                  className="load-more"
                >
                  Đọc thêm
                </a>
              </div>
            </div>
            <div
              className="post-extra-content wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div className="recent-posts">
                <h3 className="title">BÀI VIẾT GẦN ĐÂY</h3>
                <ul>
                  <li className="recent-post-item">
                    <a href="/bai-viet/can-ho-cao-cap-trung-tam-paphos-da-hoan-thanh">
                      Chương trình Golden Visa Tây Ban Nha qua đầu tư BĐS sẽ
                      dừng lại từ tháng 1/2025
                    </a>
                  </li>
                  <li className="recent-post-item">
                    <a href="/bai-viet/biet-thu-sang-trong-trung-tam-thanh-pho-paphos">
                      DUBAI next stop to aquire real estate for your collection
                      !!!
                    </a>
                  </li>
                  <li className="recent-post-item">
                    <a href="/bai-viet/can-ho-trung-tam-paphos-sip">
                      CĂN HỘ TRUNG TÂM PAPHOS, SÍP
                    </a>
                  </li>
                  <li className="recent-post-item">
                    <a href="/bai-viet/biet-thu-sang-trong-o-venus-rock-golf-resort">
                      BIỆT THỰ SANG TRỌNG Ở VENUS ROCK GOLF RESORT
                    </a>
                  </li>
                  <li className="recent-post-item">
                    <a href="/bai-viet/nhung-uu-diem-cua-hai-hinh-thuc-mua-va-thue-nha">
                      NHỮNG ƯU ĐIỂM CỦA HAI HÌNH THỨC MUA VÀ THUÊ NHÀ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
