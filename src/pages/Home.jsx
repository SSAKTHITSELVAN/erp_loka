import Hero from '../components/sections/home/Hero';
import About from '../components/sections/home/About';
import Services from '../components/sections/home/Services';
import WhyChooseUs from '../components/sections/home/WhyChooseUs';
import Timeline from '../components/sections/home/Timeline';
import VisionMission from '../components/sections/home/VisionMission';
import CTA from '../components/sections/home/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <VisionMission />
      <Timeline />
      <CTA />
    </main>
  );
}
