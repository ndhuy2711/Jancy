import Header from "../components/Header"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import ButtonContact from "../components/Bnt-contact";
import MediaBanner from "../pages/media/main-banner";
import MediaBreadcrumb from "../pages/media/main-breadcrumb";
import MediaPost from "../pages/media/main-post";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "Trải nghiệm BĐS cùng Jancy" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }
export default function Service() {
  return (
    <>
      <Header />
      <Navbar />
      <Main>
        <MediaBanner />
        <MediaBreadcrumb />
        <MediaPost />
      </Main>
      <ButtonContact />
      <Footer />
    </>
  );
}
