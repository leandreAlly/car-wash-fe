import OurServices from '../../sub/LandingPage/About';
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
    </main>
  );
};

export default LandingPage;
