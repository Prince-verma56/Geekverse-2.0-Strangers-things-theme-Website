import { useEffect, useRef } from 'react';

const FogOverlay = () => {
  const fog1Ref = useRef<HTMLDivElement>(null);
  const fog2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fog1 = fog1Ref.current;
    const fog2 = fog2Ref.current;
    if (!fog1 || !fog2) return;

    let position1 = 0;
    let position2 = -50;
    let lastTime = 0;
    const fps = 60;
    const interval = 1000 / fps;

    const animate = (time?: number) => {
      if (typeof time !== 'number') {
        requestAnimationFrame(animate);
        return;
      }
      const elapsed = time - lastTime;
      if (elapsed >= interval) {
        lastTime = time;
        position1 += 0.02;
        position2 += 0.015;

        if (position1 > 100) position1 = -100;
        if (position2 > 100) position2 = -100;

        fog1.style.transform = `translate3d(${position1}%,0,0)`;
        fog2.style.transform = `translate3d(${position2}%,0,0)`;
      }

      requestAnimationFrame(animate);
    };

    animate(0);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {/* Fog layer 1 */}
      <div
        ref={fog1Ref}
        className="absolute inset-0 w-[200%]"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 50%, 
              rgba(50, 50, 80, 0.15) 0%, 
              transparent 50%
            ),
            radial-gradient(ellipse 60% 40% at 70% 60%, 
              rgba(30, 30, 50, 0.12) 0%, 
              transparent 50%
            )
          `,
          willChange: 'transform',
        }}
      />

      {/* Fog layer 2 */}
      <div
        ref={fog2Ref}
        className="absolute inset-0 w-[200%]"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 40% 40%, 
              rgba(40, 40, 60, 0.1) 0%, 
              transparent 50%
            ),
            radial-gradient(ellipse 50% 30% at 80% 70%, 
              rgba(60, 40, 50, 0.08) 0%, 
              transparent 50%
            )
          `,
          willChange: 'transform',
        }}
      />

      {/* Bottom fog gradient */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[30vh]"
        style={{
          background: 'linear-gradient(to top, rgba(5, 5, 10, 0.8) 0%, transparent 100%)',
        }}
      />

      {/* Top vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0, 0, 0, 0.4) 100%)',
        }}
      />
    </div>
  );
};

export default FogOverlay;
