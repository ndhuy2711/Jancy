import Tiktok from "../images/icons/tiktok0.svg";
import Facebook from "../images/icons/facebook0.svg"
import LinkedIn from "../images/icons/linkedin0.svg";
import React from "react";

export default function Navbar() {
  return (
    <header
      className="header header-have-sub-1"
      id="header"
      style={{ backgroundColor: "rgb(0, 0, 0)", top: "40px" }}
    >
      <section className="wrapper container container-header">
        <a href="/" className="brand">
          <img
            src="https://hellojancy.com/images/Jancy-nav-logo%20%282%29-49808.png"
            alt="Jancy"
            style={{ maxHeight: "35px" }}
          />
        </a>
        <div id="isStickyMenu"></div>
        <div className="burger" id="burger">
          <span className="burger-line "></span>
          <span className="burger-line "></span>
          <span className="burger-line "></span>
        </div>
        <span className="header-overlay"></span>
        <nav className="navbar" id="navbar">
          <ul className="menu" id="menu">
            <li className="menu-item menu-dropdown">
              <a href="/du-an" className="menu-link">
                Dự án
              </a>

              <div
                className="submenu submenu-grid"
                style={{ minWidth: "420px" }}
              >
                <div className="row">
                  <div className="submenu-group col-md-6">
                    <h3>Loại bất động sản </h3>
                    <div className="row">
                      <div className="col">
                        <ul>
                          <li className="submenu-item">
                            <a href="/du-an/can-ho" className="submenu-link">
                              Căn hộ
                            </a>
                          </li>
                          <li className="submenu-item">
                            <a href="/du-an/biet-thu" className="submenu-link">
                              Biệt thự
                            </a>
                          </li>
                          <li className="submenu-item">
                            <a href="/du-an/nha-pho" className="submenu-link">
                              Nhà phố
                            </a>
                          </li>
                          <li className="submenu-item">
                            <a
                              href="/du-an/khu-nghi-duong-sinh-thai"
                              className="submenu-link"
                            >
                              Khu nghỉ dưỡng
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="submenu-group col-md-6">
                    <h3>Bất động sản nước ngoài </h3>
                    <div className="row">
                      <div className="col">
                        <ul>
                          <li className="submenu-item">
                            <a
                              href="/du-an/danh-muc/bat-dong-san-dubai"
                              className="submenu-link"
                            >
                              Dubai
                            </a>
                          </li>
                          <li className="submenu-item">
                            <a
                              href="/du-an/danh-muc/bat-dong-san-hy-lap"
                              className="submenu-link"
                            >
                              Hy Lạp
                            </a>
                          </li>
                          <li className="submenu-item">
                            <a
                              href="/du-an/danh-muc/bat-dong-san-my-hoa-ky"
                              className="submenu-link"
                            >
                              Mỹ (Hoa Kỳ)
                            </a>
                          </li>
                          <li className="submenu-item">
                            <a
                              href="/du-an/danh-muc/bat-dong-san-sip"
                              className="submenu-link"
                            >
                              Síp
                            </a>
                          </li>
                          <li className="submenu-item">
                            <a
                              href="/du-an/danh-muc/bat-dong-san-thai-lan"
                              className="submenu-link"
                            >
                              Thái Lan
                            </a>
                          </li>
                          <li className="submenu-item">
                            <a
                              href="/du-an/danh-muc/bat-dong-san-uc"
                              className="submenu-link"
                            >
                              Úc
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-toggle-mobile-submenu">
                <i className="fa fa-angle-down"></i>
              </div>
            </li>
            <li className="menu-item menu-dropdown">
              <a href="/bai-viet" className="menu-link  ">
                Bài viết
              </a>

              <ul className="submenu">
                <li className="submenu-item">
                  <a href="/bai-viet/danh-muc/tin-tuc" className="submenu-link">
                    Tin tức
                  </a>
                </li>
              </ul>
              <div className="nav-toggle-mobile-submenu">
                <i className="fa fa-angle-down"></i>
              </div>
            </li>
            <li className="menu-item">
              <a href="/doi-ngu" className="menu-link  ">
                DỊCH VỤ
              </a>
            </li>
            <li className="menu-item">
              <a href="/truyen-thong" className="menu-link  ">
                Truyền thông
              </a>
            </li>
            <li className="menu-item">
              <a href="/tuyen-dung" className="menu-link  ">
                Tuyển dụng
              </a>
            </li>
            <li className="menu-item">
              <a href="/ve-toi" className="menu-link  ">
                Giới thiệu
              </a>
            </li>
            <li className="menu-item sub-menu-item">
              <a href="tel:0909977939" target="_blank" className="menu-link ">
                Hotline: (+84) 909 977 939
              </a>
            </li>
            <li className="menu-item sub-menu-item">
              <a
                href="mailto:nguyen.jancy@gmail.com"
                target="_blank"
                className="menu-link "
              >
                Email: nguyen.jancy@gmail.com
              </a>
            </li>
            <li className="menu-item social-icon">
              <ul className="social-icon-list">
                <li className="social-icon-item">
                  <a
                    href="https://www.tiktok.com/@hellojancyyy"
                    target="_blank"
                  >
                    <img src={Tiktok} alt="tiktok" />
                  </a>
                </li>
                <li className="social-icon-item">
                  <a
                    href="https://www.facebook.com/JANCYNGUYEN"
                    target="_blank"
                  >
                    <img src={Facebook} alt="facebook" />
                  </a>
                </li>
                <li className="social-icon-item">
                  <a
                    href="https://www.linkedin.com/in/jancynguyen"
                    target="_blank"
                  >
                    <img src={LinkedIn} alt="linkedin" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

