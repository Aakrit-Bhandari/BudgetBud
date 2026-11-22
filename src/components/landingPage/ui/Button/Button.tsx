import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../../../utils/classNames';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'outline' | 'dark';
type ButtonSize = 'regular' | 'compact';

interface SharedButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

type LinkButtonProps = SharedButtonProps & { href: string } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof SharedButtonProps | 'href'
  >;

type ActionButtonProps = SharedButtonProps & { href?: undefined } & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof SharedButtonProps
  >;

export type ButtonProps = LinkButtonProps | ActionButtonProps;

/** Pill button. Renders an <a> when given an href, otherwise a <button>. */
export function Button(props: ButtonProps) {
  const variant = props.variant ?? 'primary';
  const size = props.size ?? 'regular';
  const buttonClassName = classNames(
    styles.button,
    styles[variant],
    size === 'compact' && styles.compact,
    props.className,
  );

  if (props.href !== undefined) {
    const { variant: _variant, size: _size, className: _className, children, ...anchorProps } = props;
    return (
      <a className={buttonClassName} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { variant: _variant, size: _size, className: _className, children, ...buttonProps } = props;
  return (
    <button type="button" className={buttonClassName} {...buttonProps}>
      {children}
    </button>
  );
}
