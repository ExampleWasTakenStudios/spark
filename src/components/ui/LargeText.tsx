import { ReactNode } from 'react';

interface LargeTextProps {
  children: ReactNode;
  className?: string;
}

export const LargeText = ({ className, children }: LargeTextProps) => {
  const css = 'text-lg font-semibold ' + className;
  return <div className={css}>{children}</div>;
};
