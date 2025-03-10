import Header from "../components/Header"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import ButtonContact from "../components/Bnt-contact";
import PostBanner from "../pages/post/main-banner";
import PostBreadcrumb from "../pages/post/main-breadcrumb";
import Post1 from "../pages/post/main-post-1";
import PostList from "../pages/post/main-post-list";
import Post2 from "../pages/post/main-post-2";


// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "Jancy - Dịch Vụ Bất Động Sản Cao Cấp Quốc Tế" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }
export default function Post() {
  return (
    <>
      <Header />
      <Navbar />
      <Main>
        <PostBanner />
        <PostBreadcrumb />
        <Post1 />
        <PostList />
        <Post2 />
      </Main>
      <ButtonContact />
      <Footer />
    </>
  );
}
