import Header from "../components/Header"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import ButtonContact from "../components/Bnt-contact";
import ServiceBanner from "../pages/service/main-banner";
import ServiceBreadcrumb from "../pages/service/main-breadcrumb";
import ServicePost from "../pages/service/main-post";

// export function meta({}: Route.MetaArgs) {
//     return [
//       { title: "Jancy - Dịch Vụ Bất Động Sản Toàn Cầu" },
//       { name: "description", content: "Welcome to React Router!" },
//     ];
//   }
export default function Service(){
    return(
         <>
              <Header />
              <Navbar />
              <Main>
                <ServiceBanner />
                <ServiceBreadcrumb/>
                <ServicePost />
              </Main>
              <ButtonContact/>
              <Footer />
            </>
    )
}