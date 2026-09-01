import { type CSSProperties, type ReactNode, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

export function AuroraBackdrop() {
  return (
    <div className="aurora-backdrop" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

export function ColorBendsBand() {
  return <div className="color-bends-band" aria-hidden="true" />;
}

export function WhiteSectionBackdrop() {
  return (
    <motion.div
      className="white-section-backdrop"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.span
        animate={{ x: [0, 18, -8, 0], y: [0, -12, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        animate={{ x: [0, -14, 12, 0], y: [0, 10, -8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

export function SparklesEffect({ density = "normal" }: { density?: "normal" | "low" }) {
  const points = density === "low" ? 10 : 16;

  return (
    <div className="sparkles-effect" aria-hidden="true">
      {Array.from({ length: points }).map((_, index) => (
        <motion.span
          key={index}
          style={
            {
              "--sparkle-left": `${8 + ((index * 29) % 84)}%`,
              "--sparkle-top": `${10 + ((index * 41) % 76)}%`,
              "--sparkle-size": `${2 + (index % 3)}px`,
            } as CSSProperties
          }
          animate={{ opacity: [0, 0.85, 0], scale: [0.7, 1.2, 0.7] }}
          transition={{
            duration: 2.8 + (index % 5) * 0.28,
            repeat: Infinity,
            delay: index * 0.12,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function Highlighter({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cn("text-highlighter", className)}>{children}</span>;
}

export function SplashCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canHover || reducedMotion) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      life: number;
      maxLife: number;
      color: string;
    };

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let lastSpawn = 0;
    const particles: Particle[] = [];
    const colors = ["rgba(255, 107, 0, 0.9)", "rgba(255, 138, 42, 0.72)", "rgba(7, 27, 58, 0.5)", "rgba(255, 255, 255, 0.76)"];

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const spawn = (x: number, y: number) => {
      const now = performance.now();
      if (now - lastSpawn < 22) {
        return;
      }
      lastSpawn = now;

      for (let index = 0; index < 4; index += 1) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.35 + Math.random() * 1.25;
        const maxLife = 34 + Math.random() * 18;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.2,
          radius: 2.2 + Math.random() * 4.8,
          life: maxLife,
          maxLife,
          color: colors[(Math.random() * colors.length) | 0],
        });
      }

      if (particles.length > 110) {
        particles.splice(0, particles.length - 110);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      spawn(event.clientX, event.clientY);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (let index = particles.length - 1; index >= 0; index -= 1) {
        const particle = particles[index];
        particle.life -= 1;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.018;

        const progress = particle.life / particle.maxLife;
        if (progress <= 0) {
          particles.splice(index, 1);
          continue;
        }

        context.save();
        context.globalAlpha = Math.min(0.7, progress);
        context.fillStyle = particle.color;
        context.shadowBlur = 16;
        context.shadowColor = "rgba(255, 107, 0, 0.34)";
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius * progress, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className="splash-cursor" aria-hidden="true" />;
}

function GlowingEffect() {
  return <span className="glowing-effect" aria-hidden="true" />;
}

export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article className={cn("spotlight-card", className)}>
      <GlowingEffect />
      {children}
    </article>
  );
}

export function ThreeDCard({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <article className={cn("three-d-card", className)} style={style}>
      <div className="three-d-card__inner">
        <GlowingEffect />
        {children}
      </div>
    </article>
  );
}
