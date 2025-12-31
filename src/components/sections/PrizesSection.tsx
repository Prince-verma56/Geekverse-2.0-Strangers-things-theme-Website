import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Medal, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const prizes = [
  {
    icon: Trophy,
    place: "1ST PLACE",
    amount: 5000,
    perks: ["Trophy", "Mentorship", "Job Offers"],
    color: "hsl(45 100% 50%)",
  },
  {
    icon: Medal,
    place: "2ND PLACE",
    amount: 3000,
    perks: ["Silver Medal", "Swag Pack", "Credits"],
    color: "hsl(0 0% 75%)",
  },
  {
    icon: Award,
    place: "3RD PLACE",
    amount: 1500,
    perks: ["Bronze Medal", "Swag Pack"],
    color: "hsl(30 80% 50%)",
  },
];

const AnimatedCounter = ({ target, trigger }: { target: number; trigger: boolean }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef({ value: 0 });

  useEffect(() => {
    if (!trigger) return;

    gsap.to(countRef.current, {
      value: target,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        setCount(Math.floor(countRef.current.value));
      },
    });
  }, [target, trigger]);

  return <span className="glitch">${count.toLocaleString()}</span>;
};

const PrizesSection = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 70%',
      onEnter: () => setAnimationTriggered(true),
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-32 px-4 overflow-hidden"
    id="prizes">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-void-deep to-background" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="font-stranger text-5xl sm:text-6xl md:text-8xl text-foreground mb-4 gsap-fade-up">
            THE <span className="text-crimson text-glow-red">REWARDS</span> AWAIT
          </h2>
          <p className="font-horror text-xl text-muted-foreground gsap-fade-up">
            $10,000+ in prizes for those who survive
          </p>
        </div>

        {/* Prize cards */}
        <div className="grid sm:grid-cols-3 gap-8 gsap-stagger">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card/30 backdrop-blur-sm border border-border/30 text-center float hoverable"
              style={{ 
                animationDelay: `${index * 0.5}s`,
              }}
            >
              {/* Glow effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: `inset 0 0 60px ${prize.color}20, 0 0 40px ${prize.color}30`,
                }}
              />

              {/* Icon */}
              <div className="mb-6 relative inline-block">
                <prize.icon 
                  size={64} 
                  style={{ color: prize.color }}
                  className="relative z-10"
                />
                <div 
                  className="absolute inset-0 blur-xl opacity-50"
                  style={{ background: prize.color }}
                />
              </div>

              {/* Place */}
              <h3 
                className="font-stranger text-2xl mb-2 tracking-widest"
                style={{ color: prize.color }}
              >
                {prize.place}
              </h3>

              {/* Amount */}
              <div 
                className="font-stranger text-5xl sm:text-6xl mb-6"
                style={{ 
                  color: prize.color,
                  textShadow: `0 0 30px ${prize.color}60`,
                }}
              >
                <AnimatedCounter target={prize.amount} trigger={animationTriggered} />
              </div>

              {/* Perks */}
              <ul className="space-y-2">
                {prize.perks.map((perk, perkIndex) => (
                  <li key={perkIndex} className="font-sans text-muted-foreground text-sm">
                    + {perk}
                  </li>
                ))}
              </ul>

              {/* Electric spark on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-0 group-hover:h-full bg-gradient-to-b from-transparent via-crimson to-transparent transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* Additional prizes */}
        <div className="mt-16 text-center gsap-fade-up">
          <p className="font-stranger text-xl text-muted-foreground tracking-wider">
            + SPECIAL CATEGORY PRIZES + SPONSOR BOUNTIES + SWAG FOR ALL
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;