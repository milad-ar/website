import * as React from "react";
import { Nav } from "../../components/nav";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import BrandIntro from "../../components/features/BrandIntro";
import ServicesSection from "../../components/features/ServicesSection";
import ProjectsTileSection from "../../components/mini-sections/ProjectsShowcase";

export default function HomePage() {
  return (
    <div className="as-homePage">
      <Nav />
      <Banner />
      <BrandIntro />
      <ServicesSection />
      <ProjectsTileSection />
      <Footer />
    </div>
  );
}
