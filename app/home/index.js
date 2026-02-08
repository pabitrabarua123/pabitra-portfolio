"use client";

import Header from "@/components/Header/Header";
import HeaderTop from "@/components/Header/HeaderTop/Header-Top";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import Home from "@/components/Home/Home";
import Service from "@/components/Service/Service";
import Context from "@/context/Context";
import Separator from "../separator";
import Timeline from "@/components/Timeline/Timeline";
import Split from "@/components/Split/Split";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Footer/Copyright";
import Roadmap from "@/components/Roadmap/Roadmap";

const HomePage = () => {
  return (
    <>
      <main className="page-wrapper">
        <Context>
          <Header
            headerTransparent="header-not-transparent"
            headerSticky="header-sticky"
            btnClass="btn-small round"
          />
          <PopupMobileMenu />
          <Service />
          <Separator top={true} />
          <Split />
          <Separator top={false} />
          <Roadmap/>
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default HomePage;
