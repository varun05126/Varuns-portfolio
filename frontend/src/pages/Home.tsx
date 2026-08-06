import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import CodingProfiles from '@/components/sections/CodingProfiles';
import Services from '@/components/sections/Services';
import WhyWorkWithMe from '@/components/sections/WhyWorkWithMe';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

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