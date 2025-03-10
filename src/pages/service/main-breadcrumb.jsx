import React from "react";
import { Link } from "react-router";

export default function ServiceBreadcrumb() {
  return (
    <section className="breadcrumb">
      <div className="container container-members">
        <ul>
          <li className="breadcrumb-item">
            <Link tof="/">Trang chủ</Link>
          </li>
          <li className="breadcrumb-item active">
            <Link tof="/doi-ngu">Đội ngũ</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
