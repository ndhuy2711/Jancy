import Header from "../components/Header"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import ButtonContact from "../components/Bnt-contact";
import NewsBanner from "../pages/post/news/main-banner";
import NewsBreadcrumb from "../pages/post/news/main-breadcrumb";
import NewsPost from "../pages/post/news/main-post";
import NewsPostList from "../pages/post/news/main-post-list";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "Cùng Jancy cập nhật các tin tức mới của thị trường " },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }
export default function News() {
  return (
    <>
      <Header />
      <Navbar />
      <Main>
        <NewsBanner />
        <NewsBreadcrumb />
        <NewsPost />
        <NewsPostList />
      </Main>
      <ButtonContact />
      <Footer />
    </>
  );
}
