import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import bgclip from "/videos/Landing 2 video.mp4";
import InteractiveTiltText3D from "../InteractiveTiltText3D";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse for glow circle
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Cinematic entrance animations
  // Cinematic entrance animations
useEffect(() => {
  const ctx = gsap.context(() => {
    if (!titleRef.current || !subtitleRef.current || !ctaRef.current) return;

    const tl = gsap.timeline({ delay: 0.4 }); // smooth delay

    const letters = titleRef.current.querySelectorAll(".letter");
    tl.fromTo(
      letters,
      { opacity: 0, y: 100, rotateX: -90, filter: "blur(20px)" },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 1.1,
        stagger: 0.07,
        ease: "back.out(1.7)"
      }
    );

    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30, filter: "blur(10px)", scale: 0.92 },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.2
      },
      "-=0.4"
    );

    if (taglineRef.current) {
      tl.fromTo(
        taglineRef.current,
        { opacity: 0, y: 20, filter: "blur(5px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power2.out",
          delay: 0.1
        },
        "-=0.5"
      );
    }

    tl.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.85, y: 35 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.1,
        ease: "elastic.out(1, 0.6)"
      },
      "-=0.3"
    );
  }, containerRef);   // bind GSAP safely only to this section

  return () => ctx.revert();   // clean animations on unmount
}, []);


  // Video GSAP morph effect
  useGSAP(() => {
    if (!videoRef.current) return;

    gsap.fromTo(
      videoRef.current,
      { opacity: 0, scale: 1.15 },
      { opacity: 1, scale: 1, duration: 1.4, ease: "power3.out" }
    );

    gsap.set(videoRef.current, {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0% 95%)",
      borderRadius: "0% 0% 40% 10%"
    });

    gsap.from(videoRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  });

  const titleText = "GEEKVERSE 2.0";
  const subtitleText = "NATIONAL LEVEL HACKATHON";

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Video BG */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(2.8) contrast(1.15)" }}
      >
        <source src={bgclip} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-deep/90 via-background/60 to-background/90" />

      {/* Mouse Glow */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full pointer-events-none transition-opacity duration-300 hidden md:block"
        style={{
          left: mousePos.x - 225,
          top: mousePos.y - 225,
          background: "radial-gradient(circle, hsl(0 100% 50% / 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          opacity: 1
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <div className="w-full flex justify-center items-center px-2">
          <InteractiveTiltText3D>
            <h1
              ref={titleRef}
              className="font-stranger-outline text-red-200 whitespace-nowrap leading-none tracking-tight text-center"
              style={{
                perspective: "1000px",
                fontSize: "clamp(2.5rem, 8vw, 10rem)",
              }}
            >
              <span className="relative inline-block">
                {titleText.split("").map((letter, index) => (
                  <span
                    key={index}
                    className="letter inline-block hover:scale-110 transition-transform duration-300"
                    style={{
                      animation: `flicker ${2 + Math.random() * 3}s infinite`,
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </span>
            </h1>
          </InteractiveTiltText3D>
        </div>

        <h2
          ref={subtitleRef}
          className="font-stranger text-md sm:text-xl md:text-2xl lg:text-3xl text-crimson tracking-[0.3em] mt-2"
        >
          {subtitleText}
        </h2>

        <p
          ref={taglineRef}
          className="font-benguiat text-sm sm:text-lg md:text-xl text-zinc-400 mt-6"
        >
          30 hours of coding in the darkest dimension. <br />
          <span className="text-crimson/80">Will you survive?</span>
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full px-4"
        >
         <Button
  size="lg"
  className="
    mt-10
    group relative
    w-full md:w-auto          /* full width on small screens, auto on md+ */
    px-4 py-3                 /* base padding, scales down on very small screens if needed */
    text-sm sm:text-base md:text-lg /* responsive text sizing: smaller on phones, larger on desktops */
    font-stranger tracking-widest
    bg-crimson text-white border-2 border-crimson/50
    hover:scale-105 hover:border-crimson
    transition-all
    disabled:opacity-50 disabled:cursor-not-allowed
  "
>
  <span className="relative z-10 flex items-center justify-center gap-2">
    <Sparkles className="w-5 h-5 animate-pulse" />
    ENTER THE UPSIDE DOWN
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </span>
</Button>
        </div>

        {/* Floating blobs */}
        <div className="absolute top-1/4 left-6 w-48 h-48 bg-crimson/10 rounded-full blur-3xl animate-float mix-blend-overlay" />
        <div className="absolute bottom-1/4 right-6 w-72 h-72 bg-crimson/10 rounded-full blur-3xl animate-float mix-blend-overlay" />

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-crimson/50 rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Animations */}
        <style>{`
        @keyframes flicker { 0%,100%{opacity:1}50%{opacity:.95}}
        @keyframes float { 0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}
        @keyframes particle {0%{opacity:0}10%{opacity:1}90%{opacity:1}100%{transform:translateY(-100vh);opacity:0}}
        .animate-float{animation:float 3s ease-in-out infinite}
        .animate-particle{animation:particle linear infinite}
      `}</style>
      </div>
    </section>
  );
};

export default HeroSection;