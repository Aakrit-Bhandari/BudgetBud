import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { loginContent } from './data';
import type { LoginFormErrors, LoginFormValues } from './types';
import { hasErrors, validateLoginForm } from '../../../utils/validation';
import { Button } from '../../landingPage/ui/Button/Button';
import { TextField } from '../../landingPage/ui/TextField/TextField';
import styles from './LoginForm.module.css';

const emptyValues: LoginFormValues = { name: '', email: '', password: '' };

interface LoginFormProps {
  /** Called with the values once they pass validation. */
  onSubmit?: (values: LoginFormValues) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [values, setValues] = useState<LoginFormValues>(emptyValues);
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (field: keyof LoginFormValues) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateLoginForm(values);
    setErrors(nextErrors);

    if (hasErrors(nextErrors)) {
      setStatus('');
      return;
    }
    setStatus(loginContent.welcomeMessage(values.name.trim().split(' ')[0]));
    onSubmit?.(values);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.header}>
        <h1 className={styles.title}>{loginContent.title}</h1>
        <p className={styles.subtitle}>{loginContent.subtitle}</p>
      </div>

      <TextField
        id="login-name"
        label="Name"
        type="text"
        autoComplete="name"
        placeholder="Your name"
        value={values.name}
        error={errors.name}
        onChange={handleChange('name')}
      />
      <TextField
        id="login-email"
        label="Email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        value={values.email}
        error={errors.email}
        onChange={handleChange('email')}
      />
      <TextField
        id="login-password"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        autoComplete="current-password"
        placeholder="At least 8 characters"
        value={values.password}
        error={errors.password}
        onChange={handleChange('password')}
        trailingAction={{
          label: showPassword ? 'Hide' : 'Show',
          ariaLabel: showPassword ? 'Hide password' : 'Show password',
          onClick: () => setShowPassword((visible) => !visible),
        }}
      />

      <div className={styles.forgotRow}>
        <a className={styles.link} href="#forgot-password">
          {loginContent.forgotPasswordLabel}
        </a>
      </div>

      <Button type="submit" className={styles.submit}>
        {loginContent.submitLabel}
      </Button>

      <p className={styles.status} role="status">
        {status}
      </p>
      <p className={styles.signUp}>
        {loginContent.signUpPrompt}{' '}
        <a className={styles.link} href="#get-started">
          {loginContent.signUpLabel}
        </a>
      </p>
    </form>
  );
}
