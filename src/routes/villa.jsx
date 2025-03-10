import Header from "../components/Header"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import ButtonContact from "../components/Bnt-contact";
import VillaBanner from "../pages/project/villa/main-banner";
import VillaBreadcrumb from "../pages/project/villa/main-breadcrumb";
import VillaPost from "../pages/project/villa/main-post";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "Jancy - Dịch Vụ Bất Động Sản Cao Cấp Quốc Tế" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }
export default function Villa() {
  return (
    <>
      <Header />
      <Navbar />
      <Main>
        <VillaBanner />
        <VillaBreadcrumb />
        <VillaPost />
      </Main>
      <ButtonContact />
      <Footer />
    </>
  );
}
