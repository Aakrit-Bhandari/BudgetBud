import type { UpcomingFeature } from '../../../landingPage/types';
import type { StyleWithCssVars } from '../../../../utils/cssVars';
import { classNames } from '../../../../utils/classNames';
import { Icon } from '../../icons/Icon';
import styles from './MysteryBox.module.css';

interface MysteryBoxProps {
  feature: UpcomingFeature;
  /** 1-based position, shown on the closed box. */
  position: number;
  isOpen: boolean;
  onToggle: () => void;
}

/** A closed gift box that pops open to reveal an upcoming feature. */
export function MysteryBox({ feature, position, isOpen, onToggle }: MysteryBoxProps) {
  const giftStyle: StyleWithCssVars = { animationDelay: `${(position - 1) * 0.45}s` };
  const accessibleLabel = isOpen
    ? `${feature.name}, coming soon. Tap to close.`
    : `Mystery box ${position}. Tap to open.`;

  return (
    <button
      type="button"
      className={classNames(styles.box, isOpen && styles.openBox)}
      aria-label={accessibleLabel}
      aria-pressed={isOpen}
      onClick={onToggle}
    >
      {isOpen ? (
        <span className={styles.reveal}>
          <Icon name="sparkle" size={44} color="var(--color-lime)" />
          <span className={styles.featureName}>{feature.name}</span>
          <span className={styles.featureDescription}>{feature.description}</span>
          <span className={styles.comingSoonBadge}>Coming soon</span>
        </span>
      ) : (
        <span className={styles.closedContent}>
          <svg
            className={styles.gift}
            style={giftStyle}
            width="92"
            height="92"
            viewBox="0 0 92 92"
            fill="none"
            aria-hidden="true"
          >
            <rect x="14" y="38" width="64" height="44" rx="8" fill="#2A2756" stroke="#8B7BFF" strokeWidth="2.5" />
            <rect x="8" y="26" width="76" height="16" rx="6" fill="#3B3868" stroke="#8B7BFF" strokeWidth="2.5" />
            <path d="M46 26v56" stroke="#C8F25A" strokeWidth="5" />
            <path
              d="M46 26c-4-14-22-14-18-4 3 7 14 4 18 4zM46 26c4-14 22-14 18-4-3 7-14 4-18 4z"
              stroke="#C8F25A"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <text
              x="69"
              y="68"
              textAnchor="middle"
              fontFamily="Space Grotesk, sans-serif"
              fontWeight="700"
              fontSize="24"
              fill="#F4F2FF"
            >
              ?
            </text>
          </svg>
          <span className={styles.closedTitle}>Mystery box {position}</span>
          <span className={styles.hint}>Hint: {feature.hint}</span>
        </span>
      )}
    </button>
  );
}
