import React from "react";
import { Link } from "react-router";

export default function EcoResortBreadcrumb() {
  return (
    <section className="breadcrumb">
      <div className="container container-projects">
        <ul>
          <li className="breadcrumb-item">
            <Link to="/">Trang chủ</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/du-an">Dự án</Link>
          </li>
          <li className="breadcrumb-item active">
            <Link to="/du-an/khu-nghi-duong-sinh-thai#">Khu nghỉ dưỡng</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
