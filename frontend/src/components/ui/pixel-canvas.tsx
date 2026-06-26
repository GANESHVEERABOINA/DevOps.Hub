"use client";

import { useCallback, useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

type Pixel = {
  x: number;
  y: number;
  color: string;
  ctx: CanvasRenderingContext2D;
  speed: number;
  size: number;
  sizeStep: number;
  minSize: number;
  maxSizeInt: number;
  maxSize: number;
  delay: number;
  counter: number;
  counterStep: number;
  isIdle: boolean;
  isReverse: boolean;
  isShimmer: boolean;
  draw: () => void;
  appear: () => void;
  disappear: () => void;
  shimmer: () => void;
};

function createPixel(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  x: number,
  y: number,
  color: string,
  baseSpeed: number,
  delay: number
): Pixel {
  const rand = (min: number, max: number) => Math.random() * (max - min) + min;

  const p: Pixel = {
    x, y, color, ctx,
    speed: rand(0.1, 0.9) * baseSpeed,
    size: 0,
    sizeStep: Math.random() * 0.4,
    minSize: 0.5,
    maxSizeInt: 2,
    maxSize: rand(0.5, 2),
    delay,
    counter: 0,
    counterStep: Math.random() * 4 + (canvas.width + canvas.height) * 0.01,
    isIdle: false,
    isReverse: false,
    isShimmer: false,
    draw() {
      const offset = p.maxSizeInt * 0.5 - p.size * 0.5;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x + offset, p.y + offset, p.size, p.size);
    },
    appear() {
      p.isIdle = false;
      if (p.counter <= p.delay) {
        p.counter += p.counterStep;
        return;
      }
      if (p.size >= p.maxSize) p.isShimmer = true;
      if (p.isShimmer) p.shimmer();
      else p.size += p.sizeStep;
      p.draw();
    },
    disappear() {
      p.isShimmer = false;
      p.counter = 0;
      if (p.size <= 0) {
        p.isIdle = true;
        return;
      }
      p.size -= 0.1;
      p.draw();
    },
    shimmer() {
      if (p.size >= p.maxSize) p.isReverse = true;
      else if (p.size <= p.minSize) p.isReverse = false;
      if (p.isReverse) p.size -= p.speed;
      else p.size += p.speed;
    },
  };

  return p;
}

export type PixelCanvasProps = {
  colors: string[];
  gap?: number;
  speed?: number;
};

export function PixelCanvas({ colors, gap = 5, speed = 30 }: PixelCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const animationRef = useRef<number>(0);
  const lastFrameRef = useRef(performance.now());
  const reducedMotionRef = useRef(false);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = wrap.getBoundingClientRect();
    const w = Math.floor(width);
    const h = Math.floor(height);
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const effectiveSpeed = reducedMotionRef.current ? 0 : Math.min(speed, 100) * 0.001;
    const pixels: Pixel[] = [];

    for (let x = 0; x < w; x += gap) {
      for (let y = 0; y < h; y += gap) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const dx = x - w / 2;
        const dy = y - h / 2;
        const delay = reducedMotionRef.current ? 0 : Math.sqrt(dx * dx + dy * dy);
        pixels.push(createPixel(ctx, canvas, x, y, color, effectiveSpeed, delay));
      }
    }

    pixelsRef.current = pixels;
  }, [colors, gap, speed]);

  const animate = useCallback((mode: "appear" | "disappear") => {
    cancelAnimationFrame(animationRef.current);
    const frameInterval = 1000 / 60;

    const loop = () => {
      animationRef.current = requestAnimationFrame(loop);

      const now = performance.now();
      const elapsed = now - lastFrameRef.current;
      if (elapsed < frameInterval) return;
      lastFrameRef.current = now - (elapsed % frameInterval);

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const pixels = pixelsRef.current;
      for (const pixel of pixels) pixel[mode]();

      if (pixels.every((p) => p.isIdle)) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    animationRef.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    init();

    const resizeObserver = new ResizeObserver(() => init());
    if (wrapRef.current) resizeObserver.observe(wrapRef.current);

    const card = wrapRef.current?.parentElement;
    const handleEnter = () => animate("appear");
    const handleLeave = () => animate("disappear");
    card?.addEventListener("mouseenter", handleEnter);
    card?.addEventListener("mouseleave", handleLeave);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationRef.current);
      card?.removeEventListener("mouseenter", handleEnter);
      card?.removeEventListener("mouseleave", handleLeave);
    };
  }, [init, animate]);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none">
      <canvas ref={canvasRef} className="block" />
    </div>
  );
}

// ==========================================
// Category Card Component (Responsive Size & Fluid Text for 2-column Mobile)
// ==========================================
export function PixelCategoryCard({ 
    name, icon, path, description, date, colors, onClick 
}: { 
    name: string, icon: React.ReactNode, path: string, description: string, date: string, colors: string[], onClick: () => void 
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        // ప్యాడింగ్ p-2 (మొబైల్), p-4 (డెస్క్ టాప్). హైట్ 130px (మొబైల్)
        "group relative flex flex-col justify-center items-center text-center p-2 sm:p-4 w-full h-[130px] sm:h-[160px] md:h-[180px] overflow-hidden bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl cursor-pointer select-none isolate transition-all duration-300",
        "hover:scale-[1.02] hover:-translate-y-1 hover:z-10",
        "hover:shadow-[0_8px_30px_-8px_color-mix(in_srgb,var(--brand)_40%,transparent),0_0_0_1px_color-mix(in_srgb,var(--brand)_50%,transparent)]"
      )}
      style={{ "--brand": colors[0] } as React.CSSProperties}
    >
      <PixelCanvas colors={colors} gap={6} speed={40} />
      
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full space-y-1 sm:space-y-3">
        
        {/* ఎమోజీ ఐకాన్: మొబైల్ లో 2-కాలమ్స్ కి తగ్గట్టు కొంచెం చిన్నగా (text-2xl) */}
        <span className="text-2xl sm:text-4xl drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300">
            {icon}
        </span>
        
        {/* కేటగిరీ టైటిల్: text-[13px] (మొబైల్), text-lg (డెస్క్ టాప్) */}
        <h3 className="text-[13px] sm:text-lg font-bold text-white group-hover:text-[var(--brand)] transition-colors duration-300 leading-tight line-clamp-2 sm:line-clamp-1 px-1">
            {name}
        </h3>
        
        <div className="relative w-full h-6 flex justify-center items-center mt-1">
            {/* డిస్క్రిప్షన్ */}
            <p className="text-[9px] sm:text-[11px] text-gray-400 group-hover:opacity-0 transition-opacity duration-300 absolute w-full px-1 line-clamp-1">
                {description}
            </p>
            
            {/* START Q&A బటన్ టెక్స్ట్ */}
            <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-widest text-[var(--brand)] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 absolute">
                {date}
            </span>
        </div>

      </div>
    </div>
  );
}