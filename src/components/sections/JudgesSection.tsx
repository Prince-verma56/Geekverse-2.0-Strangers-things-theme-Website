const judges = [
  {
    name: "DR. SARAH CHEN",
    role: "AI Research Lead",
    company: "TechCorp",
    bio: "Pioneer in neural networks with 15+ years experience.",
  },
  {
    name: "MARCUS WRIGHT",
    role: "CTO",
    company: "StartupX",
    bio: "Serial entrepreneur, built 3 unicorn startups.",
  },
  {
    name: "ELENA VORONOVA",
    role: "Engineering Director",
    company: "BigTech Inc",
    bio: "Led teams building products used by billions.",
  },
  {
    name: "JAMES OKORO",
    role: "Venture Partner",
    company: "Future Fund",
    bio: "Invested in 50+ successful tech companies.",
  },
];

const JudgesSection = () => {
  return (
    <section className="relative min-h-screen py-32 px-4 overflow-hidden"
    id="judges">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="font-stranger text-5xl sm:text-6xl md:text-8xl text-foreground mb-4 gsap-fade-up">
            THE <span className="text-crimson text-glow-red">GUIDES</span>
          </h2>
          <p className="font-horror text-xl text-muted-foreground gsap-fade-up">
            Industry legends who will judge your creations
          </p>
        </div>

        {/* Judge cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 gsap-stagger">
          {judges.map((judge, index) => (
            <div
              key={index}
              className="group relative p-6 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-crimson/50 transition-all duration-500 hoverable overflow-hidden"
            >
              {/* Portrait placeholder */}
              <div className="relative w-full aspect-square mb-6 bg-muted/30 overflow-hidden">
                {/* Avatar silhouette */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-muted to-muted/50" />
                </div>
                
                {/* Red glow overlay on hover */}
                <div className="absolute inset-0 bg-crimson/0 group-hover:bg-crimson/10 transition-colors duration-500" />
                
                {/* Border glow */}
                <div 
                  className="absolute inset-0 border-2 border-transparent group-hover:border-crimson/50 transition-colors duration-500"
                  style={{
                    boxShadow: 'inset 0 0 20px transparent',
                  }}
                />
              </div>

              {/* Info */}
              <h3 className="font-stranger text-xl text-foreground mb-1 tracking-wider group-hover:text-glow-red transition-all">
                {judge.name}
              </h3>
              <p className="font-sans text-crimson text-sm mb-1">{judge.role}</p>
              <p className="font-sans text-muted-foreground text-xs mb-3">{judge.company}</p>
              
              {/* Bio - reveals on hover */}
              <p className="font-sans text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                {judge.bio}
              </p>

              {/* Cursor follow halo effect - simplified */}
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-crimson/10 rounded-full blur-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Mentors note */}
        <div className="mt-16 text-center gsap-fade-up">
          <p className="font-stranger text-2xl text-muted-foreground tracking-wider mb-4">
            + 20 INDUSTRY MENTORS
          </p>
          <p className="font-horror text-muted-foreground">
            Available throughout the hackathon to guide you through the darkness
          </p>
        </div>
      </div>
    </section>
  );
};

export default JudgesSection;