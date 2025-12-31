import { useEffect, useRef } from 'react';

const FilmGrain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth / 2);
      canvas.height = Math.floor(window.innerHeight / 2);
    };

    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 50;
        data[i] = noise;     // R
        data[i + 1] = noise; // G
        data[i + 2] = noise; // B
        data[i + 3] = 15;    // A (low opacity)
      }

      ctx.putImageData(imageData, 0, 0);
    };

    let lastTime = 0;
    const fps = 20;
    const fpsInterval = 1000 / fps;

    const animate = (timestamp: number) => {
      animationId = requestAnimationFrame(animate);

      const elapsed = timestamp - lastTime;
      if (elapsed > fpsInterval) {
        lastTime = timestamp - (elapsed % fpsInterval);
        generateNoise();
      }
    };

    resize();
    animate(0);

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9998]"
      style={{ mixBlendMode: 'overlay', opacity: 0.3, width: '100%', height: '100%' }}
    />
  );
};

export default FilmGrain;
