import type { InputHTMLAttributes } from 'react';
import { classNames } from '../../../../utils/classNames';
import styles from './TextField.module.css';

interface TrailingAction {
  label: string;
  ariaLabel: string;
  onClick: () => void;
}

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  id: string;
  label: string;
  error?: string;
  /** Small text button inside the field, for example "Show" on a password. */
  trailingAction?: TrailingAction;
}

/** Labelled input with an optional error message and trailing action. */
export function TextField({ id, label, error, trailingAction, className, ...inputProps }: TextFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles.control}>
        <input
          id={id}
          className={classNames(
            styles.input,
            trailingAction && styles.hasAction,
            error && styles.invalid,
            className,
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          {...inputProps}
        />
        {trailingAction && (
          <button
            type="button"
            className={styles.action}
            aria-label={trailingAction.ariaLabel}
            onClick={trailingAction.onClick}
          >
            {trailingAction.label}
          </button>
        )}
      </div>
      {error && (
        <p id={errorId} className={styles.error}>
          {error}
        </p>
      )}
    </div>
  );
}
