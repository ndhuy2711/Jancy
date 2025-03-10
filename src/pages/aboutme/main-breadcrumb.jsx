import React from "react";
import { Link } from "react-router";

export default function AboutMeBreadcrumb() {
  return (
    <section className="breadcrumb">
      <div className="container container-about">
        <ul>
          <li className="breadcrumb-item">
            <Link to="/">Trang chủ</Link>
          </li>
          <li className="breadcrumb-item active">
            <Link to="/ve-toi">Giới thiệu</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
