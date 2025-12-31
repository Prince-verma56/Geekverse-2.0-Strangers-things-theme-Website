import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const RegisterSection = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date('2025-03-15T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Magnetic button effect
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center py-32 px-4 overflow-hidden"
      id="register"
    >
      {/* Intense background */}
      <div className="absolute inset-0 bg-void-deep" />
      
      {/* Pulsating background effect */}
      <div className="absolute inset-0 heartbeat">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 50%, 
                hsl(0 100% 50% / 0.1) 0%, 
                transparent 60%
              )
            `,
          }}
        />
      </div>

      {/* Lightning effects in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-crimson via-transparent to-crimson opacity-20" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-crimson to-transparent opacity-20" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Countdown */}
        <div className="mb-12 gsap-fade-up">
          <p className="font-horror text-xl text-muted-foreground mb-6">THE PORTAL OPENS IN</p>
          <div className="flex justify-center gap-4 sm:gap-8">
            {Object.entries(countdown).map(([label, value]) => (
              <div key={label} className="text-center">
                <div 
                  className="font-stranger text-4xl sm:text-6xl md:text-7xl text-crimson glitch"
                  style={{ textShadow: '0 0 30px hsl(0 100% 50% / 0.6)' }}
                >
                  {String(value).padStart(2, '0')}
                </div>
                <div className="font-horror text-xs sm:text-sm text-muted-foreground uppercase tracking-widest mt-2">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main heading */}
        <h2 className="font-stranger text-5xl sm:text-7xl md:text-9xl text-foreground mb-6 gsap-fade-up text-glow-red">
          FINAL PORTAL
        </h2>

        <p className="font-horror text-xl sm:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto gsap-fade-up">
          This is your last chance. Once you enter, there's no going back.
        </p>

        {/* Register button */}
        <div className="gsap-scale-in">
          <button
            ref={buttonRef}
            className="group relative px-16 py-8 font-stranger text-2xl sm:text-3xl tracking-[0.2em] text-primary-foreground bg-crimson border-4 border-crimson overflow-hidden magnetic-btn hoverable pulse-glow"
          >
            {/* Shockwave rings */}
            <span className="absolute inset-0 border-4 border-crimson rounded-none opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />
            <span className="absolute inset-0 border-2 border-crimson rounded-none opacity-0 group-hover:opacity-100 group-hover:scale-[2] transition-all duration-1000 delay-100" />
            
            {/* Button text */}
            <span className="relative z-10">REGISTER NOW</span>

            {/* Gradient sweep on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>

        {/* Spots remaining */}
        <p className="mt-8 font-horror text-muted-foreground gsap-fade-up">
          <span className="text-crimson font-bold">127</span> spots remaining
        </p>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-12 left-12 w-24 h-24 border-l-2 border-t-2 border-crimson/30" />
      <div className="absolute top-12 right-12 w-24 h-24 border-r-2 border-t-2 border-crimson/30" />
      <div className="absolute bottom-12 left-12 w-24 h-24 border-l-2 border-b-2 border-crimson/30" />
      <div className="absolute bottom-12 right-12 w-24 h-24 border-r-2 border-b-2 border-crimson/30" />
    </section>
  );
};

export default RegisterSection;