import Hero from '../components/sections/home/Hero';
import About from '../components/sections/home/About';
import Solutions from '../components/sections/home/Solutions';
import Industries from '../components/sections/home/Industries';
import WhyChooseUs from '../components/sections/home/WhyChooseUs';
import Timeline from '../components/sections/home/Timeline';
import VisionMission from '../components/sections/home/VisionMission';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Solutions />
      <Industries />
      <WhyChooseUs />
      <Timeline />
      <VisionMission />
    </main>
  );
}
