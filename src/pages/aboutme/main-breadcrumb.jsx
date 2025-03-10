import React from "react";

export default function AboutMeBreadcrumb() {
  return (
    <section className="breadcrumb">
      <div className="container container-about">
        <ul>
          <li className="breadcrumb-item">
            <a href="/">Trang chủ</a>
          </li>
          <li className="breadcrumb-item active">
            <a href="/ve-toi">Giới thiệu</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
