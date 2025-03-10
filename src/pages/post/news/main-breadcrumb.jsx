import React from "react";
import { Link } from "react-router";

export default function NewsBreadcrumb() {
  return (
    <section className="breadcrumb">
      <div className="container container-news">
        <ul>
          <li className="breadcrumb-item">
            <Link to="/">Trang chủ</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/bai-viet">Bài viết</Link>
          </li>
          <li className="breadcrumb-item active">
            <Link to="/bai-viet/danh-muc/tin-tuc#">Tin tức</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
