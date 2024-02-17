import Hero from '../../sub/LandingPage/Hero';
import NavBar from '../../sub/NavBar';

const LandingPage = () => {
  return (
    <main className="relative">
      <NavBar />
      <section>
        <Hero />
      </section>
    </main>
  );
};

export default LandingPage;
