import Footer from '../../sub/Footer';
import OurServices from '../../sub/LandingPage/About';
import Contact from '../../sub/LandingPage/Contact';
import Hero from '../../sub/LandingPage/Hero';
import PricingCard from '../../sub/LandingPage/PricingCard';
import NavBar from '../../sub/NavBar';

const LandingPage = () => {
  return (
    <main className="relative">
      <NavBar />
      <section className="bg-primary pb-10">
        <Hero />
      </section>
      <section className="">
        <PricingCard />
      </section>
      <section className="bg-primary">
        <OurServices />
      </section>
      <section className="bg-primary">
        <Contact />
      </section>
      <section className="bg-primary h-[70vh] max-sm:h-[100vh]">
        <Footer />
      </section>
    </main>
  );
};

export default LandingPage;
