import Hero from '../../sub/LandingPage/Hero';
import PricingCard from '../../sub/LandingPage/PricingCard';
import NavBar from '../../sub/NavBar';

const LandingPage = () => {
  return (
    <main className="relative">
      <NavBar />
      <section className="">
        <Hero />
      </section>
      <section className="">
        <PricingCard />
      </section>
    </main>
  );
};

export default LandingPage;
