import React from "react";

export default function HomeService() {
  return (
    <section className="section home-services-section">
      <div className="container container-home">
        <h2
          className="section-title wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          Dịch Vụ Bất Động Sản Quốc Tế Toàn Diện
        </h2>
        <p
          className="section-sub-title wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          {" "}
          Dịch vụ và Chất lượng chuẩn tầm Quốc tế
        </p>
        <div className="content">
          <div className="service-list row">
            <div className="col-lg-3 col-md-6">
              <div
                className="service-item wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <h3 className="title">COACHING 1:1</h3>
                <p className="text">
                  Học viên sẽ nhận được sự hướng dẫn và hỗ trợ cá nhân hóa để
                  phát triển kỹ năng, kiến thức và chiến lược đầu tư bất động
                  sản
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="service-item wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <h3 className="title">KHÓA HỌC BĐS</h3>
                <p className="text">
                  Chương trình đào tạo nhằm cung cấp kiến thức chuyên sâu về
                  lĩnh vực bất động sản, giúp học viên hiểu rõ các khía cạnh của
                  ngành
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="service-item wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <h3 className="title">TƯ VẤN ĐẦU TƯ </h3>
                <p className="text">
                  Giúp nhà đầu tư đưa ra quyết định sáng suốt, tối ưu hóa lợi
                  nhuận và giảm thiểu rủi ro, đồng thời đạt được các mục tiêu
                  tài chính dài hạn
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="service-item wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <h3 className="title">QUẢN LÝ TÀI SẢN</h3>
                <p className="text">
                  Quản lý và tối ưu hóa giá trị của các tài sản bất động sản để
                  đạt được lợi nhuận cao nhất cho Quý khách hàng chủ sở hữu hoặc
                  nhà đầu tư
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
