import type { LoginFormErrors, LoginFormValues } from '../types';

export const MIN_PASSWORD_LENGTH = 8;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLoginForm(values: LoginFormValues): LoginFormErrors {
  const errors: LoginFormErrors = {};
  if (values.name.trim() === '') errors.name = 'Enter your name.';
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Enter a valid email, like you@example.com.';
  if (values.password.length < MIN_PASSWORD_LENGTH) {
    errors.password = `Use at least ${MIN_PASSWORD_LENGTH} characters.`;
  }
  return errors;
}

export function hasErrors(errors: LoginFormErrors): boolean {
  return Object.values(errors).some(Boolean);
}
