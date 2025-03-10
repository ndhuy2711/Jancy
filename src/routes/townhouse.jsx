import Header from "../components/Header"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import ButtonContact from "../components/Bnt-contact";
import TownHouseBanner from "../pages/project/townhouse/main-banner";
import TownHouseBreadcrumb from "../pages/project/townhouse/main-breadcrumb";
import TownHousePost from "../pages/project/townhouse/main-post";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "Jancy - Dịch Vụ Bất Động Sản Cao Cấp Quốc Tế" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }
export default function TownHouse() {
  return (
    <>
      <Header />
      <Navbar />
      <Main>
        <TownHouseBanner />
        <TownHouseBreadcrumb />
        <TownHousePost />
      </Main>
      <ButtonContact />
      <Footer />
    </>
  );
}
