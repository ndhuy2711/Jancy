import { BrowserRouter, Routes, Route } from "react-router";

// export default [
//     index("routes/home.tsx"),
//     route("doi-ngu","routes/service.tsx"),
//     route("truyen-thong","routes/media.tsx"),
//     route("tuyen-dung","routes/recruitment.tsx"),
//     route("ve-toi","routes/aboutme.tsx"),

//     route("du-an","routes/project.tsx"),
//     route("du-an/can-ho","routes/apartment.tsx"),
//     route("du-an/biet-thu","routes/villa.tsx"),
//     route("du-an/nha-pho","routes/townhouse.tsx"),
//     route("du-an/khu-nghi-duong-sinh-thai","routes/ecoresort.tsx"),

//     route("bai-viet","routes/post.tsx"),
//     route("bai-viet/danh-muc/tin-tuc","routes/news.tsx"),

// ] satisfies RouteConfig;

import Home from "./routes/home"
import Service from "./routes/service"
import Media from "./routes/media"
import Recruitment from "./routes/recruitment"
import Aboutme from "./routes/aboutme"
import Project from "./routes/project"
import Apartment from "./routes/apartment"
import Villa from "./routes/villa"
import Townhouse from "./routes/townhouse"
import Ecoresort from "./routes/ecoresort"
import Post from "./routes/post"
import News from "./routes/news"

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    <Route path="/" element={<Home />} />,
    <Route path="doi-ngu" element={<Service />} />,
    <Route path="truyen-thong" element={<Media />} />,
    <Route path="tuyen-dung" element={<Recruitment />} />,
    <Route path="ve-toi" element={<Aboutme />} />,

    <Route path="du-an" element={<Project />} />,
    <Route path="du-an/can-ho" element={<Apartment />} />,
    <Route path="du-an/biet-thu" element={<Villa />} />,
    <Route path="du-an/nha-pho" element={<Townhouse />} />,
    <Route path="du-an/khu-nghi-duong-sinh-thai" element={<Ecoresort />} />,

    <Route path="bai-viet" element={<Post />} />,
    <Route path="bai-viet/danh-muc/tin-tuc" element={<News />} />,

];