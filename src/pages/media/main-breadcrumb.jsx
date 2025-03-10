import React from "react";
import { Link } from "react-router";

export default function MediaBreadcrumb() {
  return (
    <section className="breadcrumb">
      <div className="container container-members">
        <ul>
          <li className="breadcrumb-item">
            <Link to="/">Trang chủ</Link>
          </li>
          <li className="breadcrumb-item active">
            <Link to="/social">Truyền thông</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
