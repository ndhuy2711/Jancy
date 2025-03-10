import Header from "../components/Header"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import ButtonContact from "../components/Bnt-contact";
import RecruitmentBanner from "../pages/recruitment/main-banner";
import RecruitmentBreadcrumb from "../pages/recruitment/main-breadcrumb";
import RecruitmentComponent from "../pages/recruitment/main-recruitment";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "Tham gia cùng Jancy" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }
export default function Recruitment() {
  return (
    <>
      <Header />
      <Navbar />
      <Main>
        <RecruitmentBanner />
        <RecruitmentBreadcrumb />
        <RecruitmentComponent/>
      </Main>
      <ButtonContact />
      <Footer />
    </>
  );
}
