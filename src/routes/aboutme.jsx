
import Header from "../components/Header"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import ButtonContact from "../components/Bnt-contact";
import AboutMeBanner from "../pages/aboutme/main-banner";
import AboutMeBreadcrumb from "../pages/aboutme/main-breadcrumb";
import AboutMeComponent from "../pages/aboutme/main-about";
import AboutMeAchieviment from "../pages/aboutme/main-achivement";
import AboutMeGallery from "../pages/aboutme/main-about-gallery";
import AboutMeReview from "../pages/aboutme/main-review";
import React from "react";

// export function meta({}: Route.MetaArgs) {
//   return [
//     {
//       title:
//         "Thành công trong BĐS đến từ việc giao tiếp cá nhân và thiết lập kết nối bằng cách xác định nhu cầu và mong đợi của KH ngay từ đầu",
//     },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }
export default function AboutMe() {
  return (
    <>
      <Header />
      <Navbar />
      <Main>
        <AboutMeBanner />
        <AboutMeBreadcrumb />
        <AboutMeComponent />
        <AboutMeAchieviment />
        <AboutMeGallery />
        <AboutMeReview />
      </Main>
      <ButtonContact />
      <Footer />
    </>
  );
}
