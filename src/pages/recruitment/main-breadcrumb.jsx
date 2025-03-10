import React from "react";
import { Link } from "react-router";

export default function RecruitmentBreadcrumb() {
  return (
    <section className="breadcrumb">
      <div className="container container-recruitment">
        <ul>
          <li className="breadcrumb-item">
            <Link tohref="/">Trang chủ</Link>
          </li>
          <li className="breadcrumb-item active">
            <Link tohref="/tuyen-dung">Tham gia với chúng tôi</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
