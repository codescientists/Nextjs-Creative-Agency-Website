import Head from "next/head";
import HomeSlider from "../components/HomeSlider";
import About from "../components/About";
import Services from "../components/Services";
import Works from "../components/Works";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <About />
      <Services />
      <Works />
    </>
  );
}
