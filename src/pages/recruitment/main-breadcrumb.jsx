import React from "react";

export default function RecruitmentBreadcrumb() {
  return (
    <section className="breadcrumb">
      <div className="container container-recruitment">
        <ul>
          <li className="breadcrumb-item">
            <a href="/">Trang chủ</a>
          </li>
          <li className="breadcrumb-item active">
            <a href="/tuyen-dung">Tham gia với chúng tôi</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
