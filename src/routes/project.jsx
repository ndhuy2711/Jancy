import Header from "../components/Header"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import ButtonContact from "../components/Bnt-contact";
import ProjectBanner from "../pages/project/main-banner";
import ProjectBreadcrumb from "../pages/project/main-breadcrumb";
import ProjectPost from "../pages/project/main-post";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "Jancy - Dịch Vụ Bất Động Sản Cao Cấp Quốc Tế" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }
export default function Project() {
  return (
    <>
      <Header />
      <Navbar />
      <Main>
        <ProjectBanner />
        <ProjectBreadcrumb />
        <ProjectPost />
      </Main>
      <ButtonContact />
      <Footer />
    </>
  );
}
