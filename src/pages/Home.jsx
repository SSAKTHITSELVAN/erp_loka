import Hero from '../components/sections/home/Hero';
import About from '../components/sections/home/About';
import Services from '../components/sections/home/Services';
import Timeline from '../components/sections/home/Timeline';
import VisionMission from '../components/sections/home/VisionMission';
import CTA from '../components/sections/home/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <VisionMission />
      <Timeline />
      <CTA />
    </main>
  );
}
