import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Main from "./pages/main/Main";
import Detail from "./pages/detail/Detail";
import KaKao from "./components/nav/components/kakao/KaKao";
import List from "./pages/list/List";

const Routers = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail/" element={<Detail />} />
        <Route path="/oauth/kakao/callback" element={<KaKao />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routers;
