

import Animated from "../components/AnimatedSection";
import Services from "../pages/Services";
import HowItWorks from "../pages/HowItWorks";
import Testimonials from "../components/Testimonials";
import AboutUs from "../pages/AboutUs";
import Header from "../components/Header";
import ContactUs from "./ContactUs";

function Home() {
  return (
    <>
      <section id="home">
        <Header />
      </section>

      {/* <section id="animated">
        <Animated />
      </section> */}

      <section id="services">
        <Services />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="about-us">
        <AboutUs />
      </section>

      <section id="contact-us">
        <ContactUs />
      </section>
    </>
  );
}

export default Home;
