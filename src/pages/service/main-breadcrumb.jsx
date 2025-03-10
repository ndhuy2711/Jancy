import React from "react";

export default function ServiceBreadcrumb() {
  return (
    <section className="breadcrumb">
      <div className="container container-members">
        <ul>
          <li className="breadcrumb-item">
            <a href="/">Trang chủ</a>
          </li>
          <li className="breadcrumb-item active">
            <a href="/doi-ngu">Đội ngũ</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
