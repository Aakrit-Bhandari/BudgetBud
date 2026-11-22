import { useMemo } from 'react';
import type { FlyingIconKind } from '../../../landingPage/types';
import type { StyleWithCssVars } from '../../../../utils/cssVars';
import { createSeededRandom } from '../../../../utils/seededRandom';
import { FlyingIcon } from '../../icons/FlyingIcon';
import styles from './FlyingIcons.module.css';

const PARTICLE_COUNT = 10;

interface FlyingIconsProps {
  iconKinds: FlyingIconKind[];
  /** Increase this number to trigger a new burst. 0 means no burst. */
  burstId: number;
  /** Vertical position (px, inside the positioned parent) the icons fly out from. */
  originY: number;
}

/** Fills its positioned parent and shows icons flying out each time `burstId` changes. */
export function FlyingIcons({ iconKinds, burstId, originY }: FlyingIconsProps) {
  const particles = useMemo(() => {
    if (burstId === 0 || iconKinds.length === 0) return [];
    const random = createSeededRandom(burstId);

    return Array.from({ length: PARTICLE_COUNT }, (_, index) => ({
      id: index,
      kind: iconKinds[index % iconKinds.length],
      startLeftPercent: 18 + random(index + 40) * 30,
      driftX: Math.round(-60 + random(index * 3 + 1) * 520),
      riseY: -Math.round(100 + random(index * 3 + 2) * 240),
      spinDegrees: Math.round((random(index * 3 + 3) - 0.5) * 720),
      delaySeconds: index * 0.06,
    }));
  }, [burstId, iconKinds]);

  return (
    <div className={styles.layer} aria-hidden="true">
      {particles.map((particle) => {
        const particleStyle: StyleWithCssVars = {
          left: `${particle.startLeftPercent}%`,
          top: originY,
          animationDelay: `${particle.delaySeconds.toFixed(2)}s`,
          '--drift-x': `${particle.driftX}px`,
          '--rise-y': `${particle.riseY}px`,
          '--spin': `${particle.spinDegrees}deg`,
        };

        // The burst id is part of the key so every burst remounts the icons and restarts the animation.
        return (
          <span key={`${burstId}-${particle.id}`} className={styles.particle} style={particleStyle}>
            <FlyingIcon kind={particle.kind} />
          </span>
        );
      })}
    </div>
  );
}
