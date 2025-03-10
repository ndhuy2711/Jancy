import React from "react";

export default function NewsBreadcrumb() {
  return (
    <section className="breadcrumb">
      <div className="container container-news">
        <ul>
          <li className="breadcrumb-item">
            <a href="/">Trang chủ</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/bai-viet">Bài viết</a>
          </li>
          <li className="breadcrumb-item active">
            <a href="/bai-viet/danh-muc/tin-tuc#">Tin tức</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
