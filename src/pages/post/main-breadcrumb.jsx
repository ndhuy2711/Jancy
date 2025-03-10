import React from "react";

export default function PostBreadcrumb() {
  return (
    <section className="breadcrumb">
      <div className="container container-news">
        <ul>
          <li className="breadcrumb-item">
            <a href="/">Trang chủ</a>
          </li>
          <li className="breadcrumb-item active">
            <a href="/bai-viet">Bài viết</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
