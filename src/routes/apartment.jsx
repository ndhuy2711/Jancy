
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import ButtonContact from "../components/Bnt-contact";
import ApartmentBanner from "../pages/project/apartment/main-banner";
import ApartmentBreadcrumb from "../pages/project/apartment/main-breadcrumb";
import ApartmentPost from "../pages/project/apartment/main-post";
import React from "react";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "Jancy - Dịch Vụ Bất Động Sản Cao Cấp Quốc Tế" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }
export default function Apartment() {
  return (
    <>
      <Header />
      <Navbar />
      <Main>
        <ApartmentBanner />
        <ApartmentBreadcrumb />
        <ApartmentPost />
      </Main>
      <ButtonContact />
      <Footer />
    </>
  );
}
