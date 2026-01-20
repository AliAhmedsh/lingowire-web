import Hero from "../sections/Hero";
import FlagStrip from "../sections/FlagStrip";
import WhySection from "../sections/WhySection";
import HowSection from "../sections/HowSection";
import FAQ from "../sections/FAQ";
import { PageShell } from "../components/Layout";

function HomePage() {
  return (
    <PageShell>
      <Hero />
      <FlagStrip />
      <WhySection />
      <HowSection />
      <FAQ />
    </PageShell>
  );
}

export default HomePage;
