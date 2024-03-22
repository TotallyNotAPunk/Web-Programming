import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import Expectations from "../components/Expectations";
import Cta from "../components/Cta";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="section registration">
        <Expectations />
      </section>
      <section className="cta">
        <Cta />
      </section>
      <section class="section blog">
        <Blog />
      </section>
      <section class="section foot">
        <Footer />
      </section>

    </>
  );
};

export default Home;
