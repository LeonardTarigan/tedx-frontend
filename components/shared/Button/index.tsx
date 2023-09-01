import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  type: 'primary' | 'secondary';
} & (
  | {
      as: 'button';
      onClick: () => void;
    }
  | {
      as: 'client-link';
      href: string;
    }
  | {
      as: 'anchor';
      href: string;
    }
);

type ButtonStyle = {
  primary: string;
  secondary: string;
};

const baseButtonStyle: ButtonStyle = {
  primary:
    'border text-center bg-orange-primary border-orange-primary text-white px-5 py-4 rounded-lg font-bold text-lg hover:bg-orange-darker duration-300 disabled:cursor-not-allowed disabled:hover:bg-orange-primary',
  secondary:
    'border text-center border-orange-primary text-orange-primary px-5 py-4 rounded-lg font-bold text-lg hover:bg-grey-light duration-300 disabled:hover:bg-transparent',
};

function Button({
  children,
  className,
  type,
  disabled,
  ...props
}: ButtonProps) {
  switch (props.as) {
    case 'button':
      return (
        <button
          className={`${className} ${baseButtonStyle[type]}`}
          onClick={props.onClick}
          disabled={disabled}>
          {children}
        </button>
      );
    case 'client-link':
      return (
        <Link
          className={`${className} ${baseButtonStyle[type]}`}
          href={props.href}>
          {children}
        </Link>
      );
    case 'anchor':
      return (
        <a
          className={`${className} ${baseButtonStyle[type]}`}
          href={props.href}
          target="_blank"
          rel="noreferrer">
          {children}
        </a>
      );
  }
}

export default Button;
