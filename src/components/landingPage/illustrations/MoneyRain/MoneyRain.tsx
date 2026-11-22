import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import {
  createMoneyParticle,
  drawMoneyParticle,
  getParticlePoint,
  type MoneyParticle,
  type Point,
} from '../../../../utils/moneyRain';
import styles from './MoneyRain.module.css';

const MAX_PARTICLES = 46;
const SECONDS_BETWEEN_DROPS = 0.32;
const STARTING_PARTICLES = 10;

interface MoneyRainProps {
  /** Element the coins and notes fall into. Its position is re-read on every frame, so scrolling is fine. */
  targetRef: RefObject<HTMLElement>;
}

/** Full-screen canvas of coins and notes falling into `targetRef`. Draws one still frame if motion is reduced. */
export function MoneyRain({ targetRef }: MoneyRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let particles: MoneyParticle[] = [];
    let frameId = 0;
    let lastTime = performance.now();
    let secondsSinceDrop = 0;

    const getTarget = (): Point => {
      const rect = targetRef.current?.getBoundingClientRect();
      return rect
        ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
        : { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    };

    const paint = () => {
      const target = getTarget();
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles.forEach((particle) => drawMoneyParticle(ctx, particle, getParticlePoint(particle, target)));
    };

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      if (reduceMotion) paint();
    };

    const tick = (now: number) => {
      const deltaSeconds = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;
      secondsSinceDrop += deltaSeconds;

      if (secondsSinceDrop > SECONDS_BETWEEN_DROPS && particles.length < MAX_PARTICLES) {
        secondsSinceDrop = 0;
        particles.push(createMoneyParticle(window.innerWidth));
      }

      particles.forEach((particle) => {
        particle.progress += particle.speed * deltaSeconds;
      });
      particles = particles.filter((particle) => particle.progress < 1);

      paint();
      frameId = requestAnimationFrame(tick);
    };

    particles = Array.from({ length: STARTING_PARTICLES }, () =>
      createMoneyParticle(window.innerWidth, Math.random() * 0.8),
    );
    resize();
    window.addEventListener('resize', resize);
    if (!reduceMotion) frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
    };
  }, [targetRef]);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
