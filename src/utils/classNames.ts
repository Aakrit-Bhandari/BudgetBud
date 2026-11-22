type ClassValue = string | false | null | undefined;

/** Joins truthy class names, e.g. classNames(styles.card, isActive && styles.active). */
export function classNames(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ');
}
