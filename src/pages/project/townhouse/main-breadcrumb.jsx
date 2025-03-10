import React from "react";
import { Link } from "react-router";

export default function TownHouseBreadcrumb() {
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
            <Link to href="/du-an/nha-pho#">Nhà phố</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
