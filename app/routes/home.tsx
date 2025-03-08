import type { Route } from "./+types/home";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Section1 from "../pages/home/main-section-1";
import Main from "../components/main";
import HomeWhoI from "../pages/home/main-home-who-i";
import HomeAchievement from "../pages/home/main-home-achievement";
import HomeService from "../pages/home/main-home-service";
import HomeSection3 from "../pages/home/main-home-section-3";
import HomeReview from "../pages/home/main-home-review";
import HomeFeaturedPost from "../pages/home/main-home-featured-post";
import ButtonContact from "../components/bnt-contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

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
      <ButtonContact/>
      <Footer />
    </>
  );
}
