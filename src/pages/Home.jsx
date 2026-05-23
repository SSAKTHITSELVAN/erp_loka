import Hero from '../components/sections/home/Hero';
import About from '../components/sections/home/About';
import ServicesHorizontal from '../components/sections/home/ServicesHorizontal';
import WhyChooseUs from '../components/sections/home/WhyChooseUs';
import Timeline from '../components/sections/home/Timeline';
import VisionMission from '../components/sections/home/VisionMission';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ServicesHorizontal />
      <WhyChooseUs />
      <Timeline />
      <VisionMission />
    </main>
  );
}
