import type { ReactNode } from 'react';
import type { FlyingIconKind } from '../../types';

const flyingIconShapes: Record<FlyingIconKind, ReactNode> = {
  carrot: (
    <>
      <path d="M28 12c4 4-2 12-14 22C8 36 6 32 8 26 12 16 24 8 28 12z" fill="#FF8A3D" />
      <path d="M26 14c1-5 5-8 9-8M24 12c-3-4-2-8 1-10" stroke="#7BE08A" strokeWidth="3" strokeLinecap="round" fill="none" />
    </>
  ),
  tomato: (
    <>
      <circle cx="20" cy="23" r="13" fill="#FF5C5C" />
      <path d="M11 13c4 0 6 2 9 4 3-2 5-4 9-4-2 5-5 6-9 6-4 0-7-1-9-6z" fill="#7BE08A" />
    </>
  ),
  leaf: (
    <>
      <path d="M8 32C6 16 16 6 34 6c0 18-10 28-26 26z" fill="#7BE08A" />
      <path d="M8 32 24 16" stroke="#0F0E24" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  note: (
    <>
      <rect x="3" y="10" width="34" height="20" rx="3" fill="#C8F25A" />
      <circle cx="20" cy="20" r="5" fill="none" stroke="#0F0E24" strokeWidth="2.5" />
      <circle cx="8" cy="20" r="1.8" fill="#0F0E24" />
      <circle cx="32" cy="20" r="1.8" fill="#0F0E24" />
    </>
  ),
  coin: (
    <>
      <circle cx="20" cy="20" r="16" fill="#FFC857" />
      <circle cx="20" cy="20" r="11.5" fill="none" stroke="#C98F00" strokeWidth="2" />
      <path d="M15 14h10M15 19h10M16 14c7 0 7 7 0 7l8 7" stroke="#7A5200" strokeWidth="2.4" strokeLinecap="round" fill="none" />
    </>
  ),
  house: (
    <>
      <path d="M3 20 20 5l17 15z" fill="#8B7BFF" />
      <rect x="8" y="19" width="24" height="16" fill="#C9C1FF" />
      <rect x="17" y="25" width="6" height="10" fill="#0F0E24" />
    </>
  ),
  car: (
    <>
      <path d="M3 27v-7l5-9h20l5 9v7z" fill="#5CC8FF" />
      <path d="M11 14h7v6H9zM21 14h6l3 6h-9z" fill="#0F0E24" />
      <circle cx="11" cy="28" r="4.5" fill="#0F0E24" stroke="#F4F2FF" strokeWidth="2" />
      <circle cx="29" cy="28" r="4.5" fill="#0F0E24" stroke="#F4F2FF" strokeWidth="2" />
    </>
  ),
  bus: (
    <>
      <rect x="5" y="7" width="30" height="25" rx="5" fill="#FFC857" />
      <rect x="9" y="11" width="22" height="9" rx="2" fill="#0F0E24" />
      <circle cx="12" cy="32" r="3.5" fill="#0F0E24" />
      <circle cx="28" cy="32" r="3.5" fill="#0F0E24" />
    </>
  ),
  fork: (
    <path
      d="M9 4v9a4 4 0 0 0 8 0V4M13 4v32M29 4c-5 4-5 13 0 17v15"
      fill="none"
      stroke="#F4F2FF"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
  ),
  cup: (
    <>
      <path d="M6 14h22v11a9 9 0 0 1-9 9h-4a9 9 0 0 1-9-9z" fill="#FF8A6B" />
      <path d="M28 17h3a4.5 4.5 0 0 1 0 9h-3" stroke="#FF8A6B" strokeWidth="3" fill="none" />
      <path d="M13 4c-2 3 2 4 0 7M20 4c-2 3 2 4 0 7" stroke="#F4F2FF" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
  star: <path d="M20 3l5 10.5 11.5 1.5-8.3 8 2 11.5L20 29l-10.2 5.5 2-11.5-8.3-8L15 13.5z" fill="#FFC857" />,
  monitor: (
    <>
      <rect x="3" y="6" width="34" height="23" rx="3" fill="#5CC8FF" />
      <rect x="7" y="10" width="26" height="15" rx="1.5" fill="#0F0E24" />
      <path d="M13 35h14M20 29v6" stroke="#5CC8FF" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  horn: (
    <>
      <path d="M5 15h9l18-9v28l-18-9H5z" fill="#FF8A6B" />
      <path d="M14 24l2 10h5l-2-10" fill="#FF8A6B" />
    </>
  ),
};

interface FlyingIconProps {
  kind: FlyingIconKind;
  size?: number;
}

/** Colorful 40x40 illustration used by the tap-to-burst animation. */
export function FlyingIcon({ kind, size = 40 }: FlyingIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      {flyingIconShapes[kind]}
    </svg>
  );
}
