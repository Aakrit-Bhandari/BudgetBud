/** Particle maths and drawing for the falling coins and notes. No React in here. */

export type MoneyKind = 'rupee' | 'dollar' | 'note';

export interface Point {
  x: number;
  y: number;
}

export interface MoneyParticle {
  kind: MoneyKind;
  startX: number;
  size: number;
  /** Share of the whole fall completed per second. */
  speed: number;
  phase: number;
  sway: number;
  spin: number;
  /** 0 = just entered above the screen, 1 = inside the slot. */
  progress: number;
}

const START_Y = -40;
const SHRINK_FROM = 0.9;
const KINDS: MoneyKind[] = ['rupee', 'dollar', 'rupee', 'dollar', 'note'];

export function createMoneyParticle(viewportWidth: number, progress = 0): MoneyParticle {
  return {
    kind: KINDS[Math.floor(Math.random() * KINDS.length)],
    startX: Math.random() * viewportWidth,
    size: 15 + Math.random() * 13,
    speed: 1 / (2.6 + Math.random() * 2.2),
    phase: Math.random() * Math.PI * 2,
    sway: 10 + Math.random() * 26,
    spin: 3 + Math.random() * 5,
    progress,
  };
}

/** Falls faster over time while curving in towards the target. */
export function getParticlePoint(particle: MoneyParticle, target: Point): Point {
  const { progress, startX, phase, sway } = particle;
  const fall = progress * progress * (0.6 + 0.4 * progress);
  const curve = progress * progress * (3 - 2 * progress);
  const wobble = Math.sin(progress * 7 + phase) * sway * (1 - progress);
  return {
    x: startX + (target.x - startX) * curve + wobble,
    y: START_Y + (target.y - START_Y) * fall,
  };
}

export function drawMoneyParticle(ctx: CanvasRenderingContext2D, particle: MoneyParticle, point: Point): void {
  // Shrinks to nothing over the last stretch, so it slips into the slot instead of popping out.
  const arrival = Math.max(0, (particle.progress - SHRINK_FROM) / (1 - SHRINK_FROM));
  const size = particle.size * (1 - 0.25 * particle.progress) * (1 - arrival);
  if (size < 0.5) return;

  ctx.save();
  ctx.translate(point.x, point.y);
  if (particle.kind === 'note') drawNote(ctx, particle, size);
  else drawCoin(ctx, particle, size);
  ctx.restore();
}

function drawCoin(ctx: CanvasRenderingContext2D, particle: MoneyParticle, size: number): void {
  const flip = Math.max(0.22, Math.abs(Math.cos(particle.progress * particle.spin * 2 + particle.phase)));
  ctx.rotate(Math.sin(particle.phase + particle.progress * 3) * 0.4);
  ctx.scale(flip, 1);

  const shine = ctx.createRadialGradient(-size * 0.3, -size * 0.3, size * 0.1, 0, 0, size);
  shine.addColorStop(0, '#FFE49A');
  shine.addColorStop(1, '#FFC857');
  ctx.beginPath();
  ctx.arc(0, 0, size, 0, Math.PI * 2);
  ctx.fillStyle = shine;
  ctx.fill();
  ctx.lineWidth = Math.max(2, size * 0.14);
  ctx.strokeStyle = '#C98F00';
  ctx.stroke();

  ctx.fillStyle = '#7A5200';
  ctx.font = `700 ${size * 1.1}px "Space Grotesk", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(particle.kind === 'rupee' ? '₹' : '$', 0, 1);
}

function drawNote(ctx: CanvasRenderingContext2D, particle: MoneyParticle, size: number): void {
  const width = size * 2;
  const height = size * 1.1;
  ctx.rotate(Math.sin(particle.progress * 4 + particle.phase) * 0.7);

  ctx.fillStyle = '#C8F25A';
  ctx.beginPath();
  ctx.roundRect(-width / 2, -height / 2, width, height, 4);
  ctx.fill();

  ctx.strokeStyle = '#0F0E24';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(-width / 2 + 3, -height / 2 + 3, width - 6, height - 6, 3);
  ctx.stroke();

  ctx.fillStyle = '#0F0E24';
  ctx.font = `700 ${height * 0.62}px "Space Grotesk", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('$', 0, 1);
}
