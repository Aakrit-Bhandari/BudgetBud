import type { CSSProperties } from 'react';

/** Inline style object that also accepts CSS custom properties such as '--drift-x'. */
export type StyleWithCssVars = CSSProperties & {
  [customProperty: `--${string}`]: string | number;
};
