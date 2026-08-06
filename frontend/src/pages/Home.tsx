import { ScrollProgressIndicator } from '@/components/ui/ScrollProgressIndicator';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Education from '@/sections/Education';
import Skills from '@/sections/Skills';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Achievements from '@/sections/Achievements';
import CodingProfiles from '@/sections/CodingProfiles';
import Services from '@/sections/Services';
import WhyWorkWithMe from '@/sections/WhyWorkWithMe';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

const Home: React.FC = () => {
  return (
    <>
      <ScrollProgressIndicator />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <CodingProfiles />
        <Services />
        <WhyWorkWithMe />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;