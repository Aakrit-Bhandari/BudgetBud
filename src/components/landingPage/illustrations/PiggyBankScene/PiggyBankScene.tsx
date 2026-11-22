import type { StyleWithCssVars } from '../../../utils/cssVars';
import styles from './PiggyBankScene.module.css';

const fallingNotes = [
  { x: 176, y: 6, delay: -0.2 },
  { x: 193, y: 0, delay: -1.0 },
  { x: 210, y: 8, delay: -1.8 },
  { x: 227, y: 2, delay: -2.5 },
  { x: 244, y: 8, delay: -3.2 },
];

const leakingCoins = [
  { drift: 10, delay: -0.2 },
  { drift: 20, delay: -0.8 },
  { drift: 4, delay: -1.4 },
  { drift: 15, delay: -2.0 },
];

/**
 * Decorative background: a piggy bank with notes dropping into its slot,
 * a few coins leaking from a crack and a magnifying glass inspecting it all.
 */
export function PiggyBankScene() {
  return (
    <div className={styles.backdrop} aria-hidden="true">
      <svg className={styles.scene} width="660" height="528" viewBox="0 0 400 320" fill="none">
        {/* Notes are drawn first so the piggy body hides them as they drop inside. */}
        {fallingNotes.map((note) => (
          <g key={note.x} transform={`translate(${note.x} ${note.y})`}>
            <g className={styles.fallingNote} style={{ animationDelay: `${note.delay}s` }}>
              <rect x="-14" y="-8" width="28" height="16" rx="3" fill="#C8F25A" fillOpacity="0.8" />
              <circle r="4.5" fill="none" stroke="#0F0E24" strokeWidth="2" />
            </g>
          </g>
        ))}

        <path d="M82 182c-22-6-26-32-8-32c12 0 12 16 2 16" stroke="#3B3868" strokeWidth="5" strokeLinecap="round" />
        <rect x="112" y="254" width="30" height="44" rx="10" fill="#181634" stroke="#3B3868" strokeWidth="5" />
        <rect x="258" y="254" width="30" height="44" rx="10" fill="#181634" stroke="#3B3868" strokeWidth="5" />
        <ellipse cx="200" cy="188" rx="122" ry="84" fill="#181634" stroke="#3B3868" strokeWidth="5" />
        <path d="M236 112l26-34 10 40z" fill="#181634" stroke="#3B3868" strokeWidth="5" strokeLinejoin="round" />
        <rect x="312" y="160" width="46" height="42" rx="16" fill="#1E1C42" stroke="#3B3868" strokeWidth="5" />
        <circle cx="328" cy="181" r="4" fill="#3B3868" />
        <circle cx="344" cy="181" r="4" fill="#3B3868" />
        <circle className={styles.blinkingEye} cx="282" cy="146" r="7" fill="#4A4682" />
        <path d="M168 112q32-10 64 0" stroke="#0F0E24" strokeWidth="8" strokeLinecap="round" />

        <path
          d="M300 232 L289 243 L299 250 L288 264"
          stroke="#FF8A6B"
          strokeOpacity="0.85"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {leakingCoins.map((coin) => {
          const coinStyle: StyleWithCssVars = { '--leak-drift': `${coin.drift}px`, animationDelay: `${coin.delay}s` };
          return (
            <g key={coin.drift} transform="translate(292 254)">
              <g className={styles.leakingCoin} style={coinStyle}>
                <circle r="8" fill="#FFC857" fillOpacity="0.85" stroke="#C98F00" strokeWidth="2" />
                <path d="M-3 -3h6M-3 0h6M-2 -3c4 0 4 4 0 4l4 4" stroke="#7A5200" strokeWidth="1.4" strokeLinecap="round" />
              </g>
            </g>
          );
        })}

        <g transform="translate(205 170)">
          <g className={styles.magnifyingGlass}>
            <circle r="42" fill="#8B7BFF" fillOpacity="0.14" stroke="#8B7BFF" strokeOpacity="0.85" strokeWidth="9" />
            <path d="M-24 -14a28 28 0 0 1 14-14" stroke="#F4F2FF" strokeOpacity="0.7" strokeWidth="5" strokeLinecap="round" />
            <path d="M30 30l44 44" stroke="#6B5CE0" strokeOpacity="0.9" strokeWidth="14" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}
