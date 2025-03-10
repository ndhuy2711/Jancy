import Tiktok from "../images/icons/tiktok.svg";
import Fb from "../images/icons/facebook.svg";
import LinkedIn from "../images/icons/linkedin.svg";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container container-header">
        <img
          className="footer-logo"
          src="https://hellojancy.com/images/Jancy-footer-logo-white-bg%20%281%29-73204.png"
          alt="logo"
        />
        <div className="footer-infomation">
          <div className="compony-info footer-infomation-item">
            <h3 className="title">
              Jancy - Global Property Investment Advisor | Citizenship &amp;
              Residency Planning Expert | Trainer Vietnam
            </h3>
            <p className="text break-textarea-display">
              Là đối tác của IQI Global, Jancy là chuyên gia Tư vấn Đầu tư Bất
              động sản Toàn cầu, Chuyên gia Tư vấn Quốc tịch và Di trú, cùng với
              vai trò Trainer tại Việt Nam. Với hơn 10 năm kinh nghiệm trong
              lĩnh vực bất động sản nước ngoài, tư vấn di trú định cư, quản lý
              tài sản toàn cầu và cũng là nhà đầu tư bất động sản quốc tế. Jancy
              tập trung cung cấp các dịch vụ di trú định cư tại các thị trường
              trọng điểm ở Châu Âu, Châu Á và Châu Úc, mang đến những giải pháp
              toàn diện cho khách hàng. Jancy chắc chắn sẽ mang đến cho Quý
              khách hàng sự hài lòng và an tâm tuyệt đối. Liên hệ Hello Jancy
              tại: + Hotline: (+84) 90 9977 939 + Email: nguyen.jancy@gmail.com
              + VP IQI Vietnam: 67-69 Đ. Võ Nguyên Giáp, Thảo Điền, TP. Thủ Đức,
              TP. HCM + VP IQI Vietnam: VENICE 3 - Shophouse 3, New City Thủ
              Thiêm, 17 Đ. Mai Chí Thọ, P. Bình Khánh, TP. Thủ Đức, TP. Hồ Chí
              Minh Đầu tiên là lắng nghe, sau đó là thực hiện. Jancy.
            </p>
            <button
              className="btn btn-primary"
              data-source="Footer"
              data-bs-toggle="modal"
              data-bs-target=".contact-modal"
            >
              Liên hệ
            </button>
          </div>
          <div className="footer-infomation-item">
            <h3 className="title">Dịch Vụ</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="#">Coaching 1:1 </a>
              </li>
              <li className="footer-list-item">
                <a href="#">Khoá Học BĐS </a>
              </li>
              <li className="footer-list-item">
                <a href="#">Tư Vấn Đầu Tư </a>
              </li>
              <li className="footer-list-item">
                <a href="#">Quản Lý Tài Sản </a>
              </li>
              <li className="footer-list-item">
                <a> </a>
              </li>
              <li className="footer-list-item">
                <a> </a>
              </li>
            </ul>
          </div>
          <div className="footer-infomation-item">
            <h3 className="title">Khu Vực</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="#">Síp </a>
              </li>
              <li className="footer-list-item">
                <a href="#">Úc </a>
              </li>
              <li className="footer-list-item">
                <a href="#">Thái Lan </a>
              </li>
              <li className="footer-list-item">
                <a href="#">Hy Lạp </a>
              </li>
              <li className="footer-list-item">
                <a href="#">Dubai </a>
              </li>
              <li className="footer-list-item">
                <a> </a>
              </li>
            </ul>
          </div>
          <div className="footer-infomation-item">
            <h3 className="title">Liên hệ Jancy</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="https://zalo.me/+8490997799">
                  Call/Zalo: 090 9977939{" "}
                </a>
              </li>
              <li className="footer-list-item">
                <a href="https://wa.me/+84909977939">WhatsApp: 090 9977939 </a>
              </li>
              <li className="footer-list-item">
                <a href="mailto:nguyen.jancy@gmail.com">
                  Email: nguyen.jancy@gmail.com{" "}
                </a>
              </li>
              <li className="footer-list-item">
                <a> VP: TP Thủ Đức, TP HCM </a>
              </li>
              <li className="footer-list-item">
                <a>BĐS Quốc Tế </a>
              </li>
              <li className="footer-list-item">
                <a> </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-social">
          <span>Follow me:</span>
          <ul className="social-list">
            <li className="social-item">
              <a href="https://www.tiktok.com/@hellojancyyy">
                <img src={Tiktok} alt="tiktok" />
              </a>
            </li>
            <li className="social-item">
              <a href="https://www.facebook.com/JANCYNGUYEN">
                <img src={Fb} alt="facebook" />
              </a>
            </li>
            <li className="social-item">
              <a href="https://www.linkedin.com/in/jancynguyen">
                <img src={LinkedIn} alt="linkedin" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-copyright">
          <div className="left">@2023 All right reserved</div>
          <div className="right">
            <a href="/privacy-policy">Quy định bảo mật</a> |{" "}
            <a href="/terms-and-conditions">Điều khoản và điều kiện</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
