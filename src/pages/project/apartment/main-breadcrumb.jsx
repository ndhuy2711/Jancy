import React from "react";

export default function ApartmentBreadcrumb() {
  return (
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
            <a href="/du-an/can-ho#">Căn hộ</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
