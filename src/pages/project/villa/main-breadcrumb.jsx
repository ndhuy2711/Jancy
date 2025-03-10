import React from "react";
import { Link } from "react-router";

export default function VillaBreadcrumb() {
  return (
    <section className="breadcrumb">
      <div className="container container-projects">
        <ul>
          <li className="breadcrumb-item">
            <Link to href="/">Trang chủ</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to href="/du-an">Dự án</Link>
          </li>
          <li className="breadcrumb-item active">
            <Link to href="/du-an/biet-thu#">Biệt thự</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
