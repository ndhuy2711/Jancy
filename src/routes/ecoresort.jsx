import Header from "../components/Header"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import ButtonContact from "../components/Bnt-contact";
import EcoResortBanner from "../pages/project/ecoresort/main-banner";
import EcoResortBreadcrumb from "../pages/project/ecoresort/main-breadcrumb";
import EcoResortPost from "../pages/project/ecoresort/main-post";
import React from "react";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "Jancy - Dịch Vụ Bất Động Sản Cao Cấp Quốc Tế" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }
export default function EcoResort() {
  return (
    <>
      <Header />
      <Navbar />
      <Main>
        <EcoResortBanner />
        <EcoResortBreadcrumb />
        <EcoResortPost />
      </Main>
      <ButtonContact />
      <Footer />
    </>
  );
}
