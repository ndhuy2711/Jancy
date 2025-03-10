import React from "react";

export default function Recruitment() {
  return (
    <section className="section recruitment-section">
      <div className="container container-recruitment">
        <div className="content">
          <div className="job-categories">
            <h2 className="title">VỊ TRÍ ĐANG TUYỂN</h2>
            <ul className="job-categories-list">
              <li className="job-categories-item">
                <a href="https://hellojancy.com/tuyen-dung#chuyen-vien-kinh-doanh">
                  CHUYÊN VIÊN ĐẦU TƯ BĐS TOÀN CẦU
                </a>
              </li>
            </ul>
          </div>
          <div className="job-list">
            <ul>
              <li
                id="chuyen-vien-kinh-doanh"
                className="job-item wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <h2 className="job-title">CHUYÊN VIÊN ĐẦU TƯ BĐS TOÀN CẦU</h2>
                <span className="job-date">cách đây một năm</span>
                <div className="job-content">
                  <figure className="image">
                    <img
                      style={{ aspectRatio: "1080/1920" }}
                      src="https://hellojancy.com/images/jancy-hoat-dong-6%20%282%29.jpg"
                      width={1080}
                      height={1920}
                    />
                  </figure>
                  <h3>MÔ TẢ CÔNG VIỆC</h3>
                  <ul>
                    <li>
                      Tìm kiếm và tư vấn cho khách hàng có nhu cầu về bất động
                      sản
                    </li>
                    <li>
                      Cung cấp, tư vấn đầy đủ chính xác thông tin sản phẩm đáp
                      ứng nhu cầu khách hàng&nbsp;
                    </li>
                    <li>
                      Cập nhật tình hình kinh doanh để cùng nhau hỗ trợ ra kết
                      quả tốt
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <h3>YÊU CẦU CÔNG VIỆC</h3>
                  <ul>
                    <li>
                      Yêu thích kinh doanh, đam mê với lĩnh vực Bất động sản
                    </li>
                    <li>
                      Khao khát phát triển bản thân trong một môi trường năng
                      động
                    </li>
                    <li>
                      Là người kiên trì, quyết liệt, có trách nhiệm cao trong
                      công việc
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <h3>QUYỀN LỢI</h3>
                  <p>Cơ hội huấn luyện:</p>
                  <ul>
                    <li>
                      Được đào tạo chuyên nghiệp và tham gia vào môi trường năng
                      động tầm quốc tế
                    </li>
                    <li>Thời gian làm việc: linh hoạt</li>
                    <li>
                      Đồng nghiệp thân thiện, nhiệt huyết, hòa đồng, sẵn sàng
                      chia sẻ, giúp đỡ nhau cùng phát triển
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <p>Phúc lợi:</p>
                  <ul>
                    <li>Hoa hồng tốt tuỳ theo dự án (hoa hồng và thưởng)</li>
                    <li>
                      Team building hàng tháng và du lịch trong nước + nước
                      ngoài hàng năm&nbsp;
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <p>
                    Đừng ngừng ngại liên hệ với Jancy để tìm hiểu rõ hơn về công
                    việc và mở rộng cơ hội phát triển bản thân nhé.
                  </p>
                </div>
                <button
                  className="btn btn-primary"
                  data-source="CHUYÊN VIÊN ĐẦU TƯ BĐS TOÀN CẦU"
                  data-bs-toggle="modal"
                  data-bs-target="#contact-modal"
                >
                  Ứng tuyển
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
