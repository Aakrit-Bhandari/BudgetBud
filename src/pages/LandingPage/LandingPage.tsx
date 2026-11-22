import { Footer } from '../../components/landingPage/layout/Footer/Footer';
import { Navbar } from '../../components/landingPage/layout/Navbar/Navbar';
import { BudgetExplorer } from '../../components/landingPage/sections/BudgetExplorer/BudgetExplorer';
import { CallToAction } from '../../components/landingPage/sections/CallToAction/CallToAction';
import { DailySummary } from '../../components/landingPage/sections/DailySummary/DailySummary';
import { Hero } from '../../components/landingPage/sections/Hero/Hero';
import { MysteryBoxes } from '../../components/landingPage/sections/MysteryBoxes/MysteryBoxes';

export function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BudgetExplorer />
        <DailySummary />
        <MysteryBoxes />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
