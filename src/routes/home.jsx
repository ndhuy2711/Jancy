import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section1 from "../pages/home/main-section-1";
import Main from "../components/Main";
import HomeWhoI from "../pages/home/main-home-who-i";
import HomeAchievement from "../pages/home/main-home-achievement";
import HomeService from "../pages/home/main-home-service";
import HomeSection3 from "../pages/home/main-home-section-3";
import HomeReview from "../pages/home/main-home-review";
import HomeFeaturedPost from "../pages/home/main-home-featured-post";
import ButtonContact from "../components/Bnt-contact";
import React from "react";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "Jancy" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Main>
        <Section1 />
        <HomeWhoI />
        <HomeAchievement />
        <HomeService />
        <HomeSection3 />
        <HomeReview />
        <HomeFeaturedPost />
      </Main>
      <ButtonContact />
      <Footer />
    </>
  );
}
