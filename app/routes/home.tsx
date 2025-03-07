import type { Route } from "./+types/home";
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from '../components/footer'
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
    <Footer />
    </>

  );
}
