import { useEffect } from 'react';
import CustomCursor from '@/components/effects/CustomCursor';
import ParticleField from '@/components/effects/ParticleField';
import FogOverlay from '@/components/effects/FogOverlay';
import FilmGrain from '@/components/effects/FilmGrain';
import LightningFlash from '@/components/effects/LightningFlash';
// import NeonCursor from '@/components/effects/NeonCursor';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import WhyJoinSection from '@/components/sections/WhyJoinSection';
import TracksSection from '@/components/sections/TracksSection';
import PrizesSection from '@/components/sections/PrizesSection';
import JudgesSection from '@/components/sections/JudgesSection';
import SponsorsSection from '@/components/sections/SponsorsSection';
import RegisterSection from '@/components/sections/RegisterSection';
import FooterSection from '@/components/sections/FooterSection';
import useGsapScroll from '@/hooks/useGsapScroll';
import CircularNav from '@/components/sections/CircularNav';
import { LenisProvider } from '@/context/LenisContext';




const IndexContent = () => {
  // Initialize GSAP animations
  useGsapScroll();

  useEffect(() => {
    // Add dark class to html for dark theme
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Global Effects */}
      <CustomCursor />
      <ParticleField />
      <FogOverlay />
      <FilmGrain />
      <LightningFlash />
      {/* {typeof NeonCursor === 'function' && <NeonCursor />} */}

      {/* Main Content */}
      <main>
        <CircularNav />
        <HeroSection /> 
        <AboutSection /> 
        <WhyJoinSection /> 
        <TracksSection />
        <PrizesSection />
        <JudgesSection />
        <SponsorsSection />
        <RegisterSection />
        <FooterSection />
      </main>
    </div>
  );
};

const Index = () => {
  return (
    <LenisProvider>
      <IndexContent />
    </LenisProvider>
  );
};

export default Index;
