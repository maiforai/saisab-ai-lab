import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Flowing text particles representing NLP processing
    const particles: { x: number; y: number; speed: number; char: string; opacity: number; size: number }[] = [];
    const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const particleCount = 25;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.15 + Math.random() * 0.25,
        char: chars[Math.floor(Math.random() * chars.length)],
        opacity: 0.1 + Math.random() * 0.15,
        size: 12 + Math.random() * 8,
      });
    }

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      const isDark = document.documentElement.classList.contains('dark');

      particles.forEach((particle) => {
        // Gentle vertical flow with subtle horizontal wave
        particle.y -= particle.speed;
        particle.x += Math.sin(time + particle.y * 0.01) * 0.3;

        // Reset particle when it goes off screen
        if (particle.y < -20) {
          particle.y = canvas.height + 20;
          particle.x = Math.random() * canvas.width;
          particle.char = chars[Math.floor(Math.random() * chars.length)];
        }

        // Draw character with subtle glow
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.font = `${particle.size}px "JetBrains Mono", monospace`;
        ctx.fillStyle = isDark ? "rgba(135, 175, 205, 0.4)" : "rgba(34, 70, 94, 0.35)";
        ctx.fillText(particle.char, particle.x, particle.y);
        
        // Very subtle glow effect
        ctx.globalAlpha = particle.opacity * 0.3;
        ctx.shadowBlur = 8;
        ctx.shadowColor = isDark ? "rgba(135, 175, 205, 0.3)" : "rgba(34, 70, 94, 0.25)";
        ctx.fillText(particle.char, particle.x, particle.y);
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60 dark:opacity-50"
    />
  );
};

export default AnimatedBackground;
